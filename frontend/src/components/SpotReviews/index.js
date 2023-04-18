import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotReview from './SpotReview';
import './SpotReviews.css'

function SpotReviewsModal({reviewId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p id="reviewLonger" onClick={() => setShowModal(true)}>Read More</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SpotReview setShowModal={setShowModal} reviewId={reviewId}/>
        </Modal>
      )}
    </>
  );
}

export default SpotReviewsModal;
