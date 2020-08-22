import React, { Component } from "react";
import ColorLuminance from "./utils/getDarkenLihtenColor";
import ulk from "../media/photos/ulk2.png";
import Post from "./common/post";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import PostControls from "./common/postControls";
import { TiMessages } from "react-icons/ti";
import { Link, Redirect, Route } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import PostList from "./postList";
import { users, posts } from "../data/posts";
import ProfileNavbar from "./profileNavbar";
import Switch from "react-bootstrap/esm/Switch";
class UserProfile extends Component {
  state = {
    UserTooltipVisible: false,
    user: null,
    posts: {},
    navModalOpen: false,
    selectedLink: "Posts",
  };
  handleShowUser = () => {
    this.setState({ UserTooltipVisible: true });
  };
  handleHideUser = () => {
    this.setState({ UserTooltipVisible: false });
  };
  handleDeletePost = (post) => {
    console.log(" post deleted", post);
  };
  handleEditPost = (post) => {
    console.log("post edited", post);
  };
  handleNavModalShown = () => {
    this.setState({ navModalOpen: !this.state.navModalOpen });
  };
  handleCloseNavModalDown = () => {
    this.setState({ navModalOpen: false });
  };
  handlSelecteLink = (link) => {
    if (link.path === "/dashboard") {
      return this.props.history.push(link.path);
    }

    this.setState({ selectedLink: link.name, navModalOpen: false });
  };
  componentDidMount() {
    const userId = this.props.match.params.userId;
    const user = users.filter((user) => user.id === userId);
    const _posts = posts.filter((post) => post.userId === user[0].id);

    if (user.length === 0) return <Redirect to="/" />;
    this.setState({ user: user[0], posts: _posts });
  }

  PostControls = (post) => {
    return (
      <div className="post-additional-info">
        <div className="post-controls-profile">
          <div
            className="control-item"
            onClick={() => this.handleEditPost(post)}
          >
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <MdModeEdit />
            </IconContext.Provider>
            <span>edit</span>
          </div>
          <div
            className="control-item"
            onClick={() => this.handleDeletePost(post)}
          >
            <IconContext.Provider value={{ className: "profile-edit-icon" }}>
              <BsTrash />
            </IconContext.Provider>
            <span>delete</span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { onToggleMenu } = this.props;
    const {
      UserTooltipVisible,
      user,
      posts,
      navModalOpen,
      selectedLink,
    } = this.state;

    const links = [
      {
        id: 1,
        name: "Posts",
        path: "/posts",
        icon: <TiMessages />,
      },
      {
        id: 2,
        name: "Mentions",
        path: "/",
        icon: <FiAtSign />,
      },
      {
        id: 3,
        name: "View Dashboard",
        path: "/dashboard",
        icon: <FiAtSign />,
      },
      {
        id: 4,
        name: "Settings",
        path: "/",
        icon: <FaCog />,
      },
    ];
    return (
      <>
        {user && (
          <div className="userProfile-main-wrapper">
            <ProfileNavbar
              onToggleMenu={onToggleMenu}
              onShowModal={this.handleNavModalShown}
              selectedLink={selectedLink}
            />
            <div className="user-profile-header">
              <div
                className="user-profile-b"
                style={{ backgroundColor: ColorLuminance(user.color, 0.2) }}
              ></div>
              <div className="image-profile-wrapper">
                <img src={ulk} alt="" srcset="" />
              </div>
            </div>
            <div className="use-profile-container">
              <div className="user-profile-sidebar">
                <div
                  className="user-profile-img"
                  style={{ backgroundColor: user.color }}
                >
                  {user.imageUrl ? (
                    <img src={user.imageUrl} alt="" srcset="" />
                  ) : (
                    <span>{user.initial}</span>
                  )}
                </div>
                <div className="user-profile-identity">
                  <h2>{user.firstName + " " + user.lastName}</h2>
                  <span>Joined 22 Aprile, 2020</span>
                </div>
                <div
                  className={
                    navModalOpen
                      ? "side-links-profile "
                      : "side-links-profile toggled"
                  }
                >
                  {links.map((l) => (
                    <div
                      to={l.path}
                      key={l.id}
                      className={
                        selectedLink === l.name ? "link active-link" : "link"
                      }
                      onClick={() => this.handlSelecteLink(l)}
                    >
                      <IconContext.Provider
                        value={{ className: "profile-side-icon" }}
                      >
                        {l.icon}
                      </IconContext.Provider>
                      <span>
                        {l.name}
                        {l.name === "Posts" && (
                          <strong
                            className="post-length"
                            style={{ backgroundColor: user.color }}
                          >
                            {posts.length}
                          </strong>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="user-profile-content">
                {selectedLink === "Posts" && (
                  <PostList
                    posts={posts}
                    user={user}
                    onShowUser={this.handleShowUser}
                    UserTooltipVisible={UserTooltipVisible}
                    onHideUser={this.handleHideUser}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default UserProfile;
