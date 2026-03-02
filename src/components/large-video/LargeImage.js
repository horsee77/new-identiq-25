"use client";

function LargeImage() {
  const styling = {
    backgroundImage: "url('/assets/images/service/05.webp')",
  };

  return (
    <div
      className="large-image-area-bg-service-page jarallax rts-section-gap"
      style={styling}
    >
      {/* large image area start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12" />
        </div>
      </div>
      {/* large image area end */}
    </div>
  );
}

export default LargeImage;