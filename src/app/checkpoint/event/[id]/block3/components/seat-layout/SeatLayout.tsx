import { LayoutActionsProvider } from "../../edit/layoutActions2";
import CanvasStage from "./CanvasStage";

export default function SeatLayout({ layout }) {
  return (
    <LayoutActionsProvider>
      <CanvasStage sections={layout} />
    </LayoutActionsProvider>
  );
}
