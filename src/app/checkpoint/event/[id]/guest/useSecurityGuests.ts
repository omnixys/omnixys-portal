// app/security/guests/useSecurityGuests.ts
"use client";

import { useEffect, useMemo, useState } from "react";
import { useApolloClient, useQuery } from "@apollo/client/react";
import { SecurityGuestVM } from "./types";

import { GET_TICKETS_BY_EVENT } from "../../../../../graphql/ticket/ticket.query";
import { GET_USER_LIST } from "../../../../../graphql/user/user-query.graphql";
import { GET_SEAT_BY_ID } from "../../../../../graphql/seat/seat-query.graphql";
import { Seat } from "../../../../../types/seat/seat.type";

export function useSecurityGuests(eventId: string) {
  const client = useApolloClient();

  // 1️⃣ Tickets
  const { data: ticketData, loading: ticketsLoading } = useQuery(
    GET_TICKETS_BY_EVENT,
    { variables: { eventId } }
  );

  const tickets =
    ticketData?.ticketsByEvent.filter((t: any) => !t.revoked) ?? [];

  // 2️⃣ Users (batch)
  const guestIds = useMemo(
    () => [
      ...new Set(tickets.map((t: any) => t.guestProfileId).filter(Boolean)),
    ],
    [tickets]
  );

  const { data: userData } = useQuery(GET_USER_LIST, {
    variables: { guesIdList: guestIds },
    skip: guestIds.length === 0,
  });

  const userMap = useMemo(() => {
    const map = new Map<string, string>();
    userData?.getUserList.forEach((u: any) => {
      map.set(u.id, `${u.firstName} ${u.lastName}`);
    });
    return map;
  }, [userData]);

  // 3️⃣ Seats (imperativ, korrekt)
  const [seatMap, setSeatMap] = useState<Map<string, SeatVM>>(new Map());


  useEffect(() => {
    let cancelled = false;

    async function loadSeats() {
      const seatIds = [
        ...new Set(tickets.map((t: any) => t.seatId).filter(Boolean)),
      ];

      if (seatIds.length === 0) return;

      const map = new Map<string, string>();

      await Promise.all(
        seatIds.map(async (seatId) => {
          const { data } = await client.query({
            query: GET_SEAT_BY_ID,
            variables: { seatId },
          });

          const seat: Seat | undefined = data?.seat;
          if (!seat) return;

          const label = `${seat.section.name} | ${seat.table.name} | ${
                seat.label ?? seat.number ?? ""
              }`;

          map.set(seatId, {
            section: seat.section?.name,
            table: seat.table?.name,
            number: seat.label ?? seat.number ?? undefined,
          });
        })
      );

      if (!cancelled) {
        setSeatMap(map);
      }
    }

    loadSeats();

    return () => {
      cancelled = true;
    };
  }, [tickets, client]);

  // 4️⃣ Aggregation → ViewModel
  const guests: SecurityGuestVM[] = useMemo(() => {
    return tickets.map((ticket: any) => ({
      ticketId: ticket.id,
      guestId: ticket.guestProfileId,

      name: userMap.get(ticket.guestProfileId) ?? "Unbekannter Gast",

      seat: seatMap.get(ticket.seatId) ?? "—",

      status: ticket.checkedInAt ? "CHECKED_IN" : "NOT_ARRIVED",
      presence: ticket.currentState,

      checkedInAt: ticket.checkedInAt ?? undefined,
    }));
  }, [tickets, userMap, seatMap]);

  return {
    guests,
    loading: ticketsLoading,
  };
}
