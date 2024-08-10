import { calendarInitialState } from "@/Data/event";
import { DraggableEvents, RemoveAfterDrop } from "../../utils/constant";
import { Col, Input, Label } from "reactstrap";


const CalendarEvents = () => {
  return (
    <Col xxl={3} xl={4} className="box-col-30">
      <div id="external-events" className="calendar-default">
        <h4>{DraggableEvents}</h4>
        <div className="external-events-list">
          {calendarInitialState.events.map((event, index) => (
            <div
              className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-sm mb-3 border-0 ${event.className}`}
              title={event.title}
              key={index}
            >
              <div className="fc-event-main">
                <i className={`me-2 ${event.icon}`}></i>
                {event.title}
              </div>
            </div>
          ))}
        </div>
        <p>
          <Input
            className="checkbox_animated"
            id="drop-remove"
            type="checkbox"
          />
          <Label htmlFor="drop-remove" className="m-0">{RemoveAfterDrop}</Label>
        </p>
      </div>
    </Col>
  );
};

export default CalendarEvents;
