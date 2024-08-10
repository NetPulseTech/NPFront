import { Fragment, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Col } from "reactstrap";
import CalendarEvents from "./CalendarEvents";
import { calenderEventClick } from "./CalenderFunction";
import { calendarInitialState } from "@/Data/event";

const DragCalendar = () => {
  const state = useState(calendarInitialState)[0];
  useEffect(() => {
    let draggableEl: any = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);

  return (
    <Fragment>
      <CalendarEvents />
      <Col xxl={9} xl={8} className="box-col-70">
        <div className="demo-app-calendar" id="mycalendartest">
          <FullCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            rerenderDelay={10}
            eventDurationEditable={false}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={state.calendarEvents}
            eventClick={calenderEventClick}
          />
        </div>
      </Col>
    </Fragment>
  );
};
export default DragCalendar;
