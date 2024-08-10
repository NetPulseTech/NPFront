import CreatePost from "./CreatePost";
import PostWrapper from "./PostWrapper";

const ContentCenter = () => {
  return (
    <div className="content-center">
      <CreatePost />
      <div className="overlay-bg" />
      <div className="post-panel section-t-space">
        <PostWrapper />
        <PostWrapper className="section-t-space" />
      </div>
    </div>
  );
};

export default ContentCenter;
