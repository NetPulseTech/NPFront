const PostWrapper = ({className}:{className?:string}) => {
  return (
    <div className={`post-wrapper col-grid-box ${className}`}>
      <div className="post-title">
        <div className="profile">
          <div className="media">
            <div className="user-img"></div>
            <div className="media-body">
              <h5 />
              <h6 />
            </div>
          </div>
        </div>
      </div>
      <div className="post-details ratio2_1">
        <div className="img-wrapper bg-size"></div>
        <div className="detail-box">
          <h3 />
          <h5 className="tag" />
          <div className="ldr-p">
            <p />
            <p />
          </div>
          <div className="bookmark favourite-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default PostWrapper;
