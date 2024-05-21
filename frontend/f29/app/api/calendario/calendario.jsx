import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './calendar.css'; // Importa los estilos CSS personalizados

function Calendar() {
  const [events, setEvents] = useState([
    {
      title: "Pagar los sueldos",
      start: "2024-05-10T08:00:00",
      end: "2024-05-10T09:00:00",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSaveEvent = () => {
    setEvents([...events, { ...newEvent, start: selectedDate + "T" + newEvent.start, end: selectedDate + "T" + newEvent.end }]);
    setShowModal(false);
  };

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        dateClick={handleDateClick}
        eventDidMount={(info) => {
          new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content: "<p>HOLA<strong>FUNCIONA!</strong>.</p>",
          });
        }}
        className="custom-calendar" // Añadido: clase personalizada
      />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título del Evento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese título"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora de Inicio</Form.Label>
              <Form.Control
                type="time"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora de Término</Form.Label>
              <Form.Control
                type="time"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveEvent}>
            Guardar Evento
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Calendar;