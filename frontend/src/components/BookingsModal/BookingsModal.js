import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookedDates from '../SpotDetails/BookedDates'

function BookingsModal({bookedDatesArr}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="reserveButton" onClick={() => setShowModal(true)}>See currently booked dates</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookedDates setShowModal={setShowModal} bookedDatesArr={bookedDatesArr}/>
        </Modal>
      )}
    </>
  );
}

export default BookingsModal;
