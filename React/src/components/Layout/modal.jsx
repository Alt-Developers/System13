import React from "react";

const modal = (props) => {
  return (
    <section className="modal warning">
      <h3 className="modal-header">Reminder for everyone</h3>
      <p className="modal-info">
        The following program isn't perfect. <br />
        So if there are bugs please contact the SS Developers
      </p>
      <button className="btn-understand btn">
        I Understand the possible consequences
      </button>
    </section>
  );
};

export default modal;
