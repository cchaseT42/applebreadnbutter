import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateBooking from '../UpdateBooking/UpdateBooking';

function UpdateBookingModal({bookingId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="reserveButton" onClick={() => setShowModal(true)}>Edit Booking</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateBooking setShowModal={setShowModal} bookingId={bookingId}/>
        </Modal>
      )}
    </>
  );
}

export default UpdateBookingModal;
