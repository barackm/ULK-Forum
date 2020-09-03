import React, { Component } from "react";
import { IconContext } from "react-icons";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { Switch, Route } from "react-router-dom";
import { FaCog, FaPlusCircle } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { Link } from "react-router-dom";

import ColorLuminance from "../utils/getDarkenLihtenColor";
import ProfileNavbar from "./profileNavbar";
import PostList from "../post/postList";
import { users, posts } from "../../data/posts";
import ulk from "../../media/photos/ulk2.png";

class UserProfile extends Component {
  state = {
    UserTooltipVisible: false,
    user: null,
    posts: {},
    navModalOpen: false,
    selectedLink: "Posts",
    isCurrentUser: true,
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
    const currentUser = {
      _id: "898549a0-52bc-4a72-9323-68c3c78deea5",
      email: "aline@gmail.com",
      firstName: "Alline",
      lastName: "Megan",
      initial: "A",
      imageUrl: "",
      color: "#FFC312",
      joinedAt: "7 mach, 2020",
    };
    const userName = this.props.match.params.userName;
    const user = users.filter((user) => user.userName === userName);
    if (user.length === 0) return this.props.history.replace("/not-found");

    if (user[0]._id === currentUser._id) {
      this.setState({ isCurrentUser: true });
    }
    const _posts = posts.filter((post) => post.userId === user[0]._id);
    this.setState({ user: user[0], posts: _posts, isCurrentUser: false });
  }
  handleChangeImage = async (event) => {
    const image = event.target.files[0];
    const imageSize = image.size;
    console.log(imageSize);
    if (imageSize > 1052458) {
    } else {
    }
  };
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
      isCurrentUser,
    } = this.state;

    const links = [
      {
        id: 1,
        name: "Posts",
        path: `${this.props.match.url}`,
        icon: <TiMessages />,
      },
      {
        id: 2,
        name: "Mentions",
        path: `${this.props.match.url}/mentions/`,
        icon: <FiAtSign />,
      },
    ];
    const Authlinks = [
      {
        id: 1,
        name: "Posts",
        path: `${this.props.match.url}`,
        icon: <TiMessages />,
      },
      {
        id: 2,
        name: "Mentions",
        path: `${this.props.match.url}/mentions/`,
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
        path: `${this.props.match.url}/settings/`,
        icon: <FaCog />,
      },
    ];
    const { match } = this.props;
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
                style={{ backgroundColor: ColorLuminance(user.color, 0.3) }}
              ></div>
              <div className="image-profile-wrapper">
                <img src={ulk} alt="" />
              </div>

              <div
                onClick={() => console.log("image upload clicked")}
                className="user-profile-img"
                style={{ backgroundColor: user.color }}
              >
                {user.imageUrl ? (
                  <img src={user.imageUrl} alt="" />
                ) : (
                  <span>{user.initial}</span>
                )}
                <label className="custom-file-upload">
                  <input
                    type="file"
                    onChange={this.handleChangeImage}
                    accept="image/*"
                  />
                  <IconContext.Provider
                    value={{ className: "upload-image-icon" }}
                  >
                    <FaPlusCircle />
                  </IconContext.Provider>
                </label>
              </div>
            </div>
            <div className="use-profile-container">
              <div className="user-profile-sidebar">
                <div className="user-profile-sidebar-wjtxg">
                  <div className="image-profile"></div>
                  <div className="user-profile-identity">
                    <h2>{user.userName}</h2>
                    <span>{user.joinedAt}</span>
                  </div>
                </div>
                <div
                  className={
                    navModalOpen
                      ? "side-links-profile "
                      : "side-links-profile toggled"
                  }
                >
                  {!isCurrentUser
                    ? links.map((l) => (
                        <Link
                          to={l.path}
                          key={l._id}
                          className={
                            selectedLink === l.name
                              ? "link active-link"
                              : "link"
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
                        </Link>
                      ))
                    : Authlinks.map((l) => (
                        <Link
                          to={l.path}
                          key={l._id}
                          className={
                            selectedLink === l.name
                              ? "link active-link"
                              : "link"
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
                        </Link>
                      ))}
                </div>
              </div>

              <div className="user-profile-content">
                <Switch>
                  <Route
                    exact
                    path={`${match.path}/`}
                    render={(props) => (
                      <PostList
                        {...props}
                        posts={posts}
                        user={user}
                        isCurrentUser={isCurrentUser}
                        onShowUser={this.handleShowUser}
                        UserTooltipVisible={UserTooltipVisible}
                        onHideUser={this.handleHideUser}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default UserProfile;
