import React, { useEffect, useState } from "react";
import CampaignFilters from "./../CampaignFilters";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "../style/Profile.css";
import Avatar from "./UpdateUserInfo/Avatar";
import Username from "./UpdateUserInfo/Username"

function Profile(props) {
  console.log("====================");
  console.log(props);

  const [campaignFilter, setCampaignFilter] = useState("all");
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [invites, setInvites] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [updatePic, setUpdatePic] = useState(false);
  const [username, setUsername] = useState("");
  const [updateUsername, setUpdateUsername] = useState(false);

  const handleCampaignFilterChange = (filter) => {
    setCampaignFilter(filter);
    const newArr = data.filter((campaign) => {
      switch (filter) {
        case "gm":
          return campaign.gm_id === props.userState.id;
        case "player":
          return campaign.gm_id !== props.userState.id;
        case "all":
          return true;
        default:
          return true;
      }
    });
    setDisplayData(newArr);
  };

  const createCampaign = () => {
    setCampaignFilter("all");
    const createdCampaign = {
      name: "Untitled Campaign",
      description: "Insert description here",
    };
    API.createCampaign(createdCampaign, props.token).then((res) => {
      console.log("res1", res);
      setData([...data, res.data]);
      API.createUserCampaign(res.data.id, props.token).then((response) => {
        console.log("res2", response);
      });
    });
  };

  const deleteCampaign = (dltCmpgnId) => {
    API.deleteCampaign(dltCmpgnId, props.token).then((res) => {
      console.log(res);
    });
    const updatedData = data.filter(
      (campaign) => campaign.id !== Number(dltCmpgnId)
    );
    setData(updatedData);
  };

  const acceptInvite = (campid, id) => {
    API.createUserCampaign(campid, props.token).then((res) => {
      API.deleteInvite(id, props.token);
    });
  };

  const declineInvite = () => {};

  useEffect(() => {
    API.findSelf(props.token)
      .then((res) => {
        console.log(res);
        setData(res.data.Campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.token]);

  useEffect(() => {
    handleCampaignFilterChange(campaignFilter);
  }, [data]);

  useEffect(() => {
    API.findSelf(props.token).then((res) => {
      let tempInvites = res.data.Invites;
      for (let i = 0; i < tempInvites.length; i++) {
        API.findCampaign(tempInvites[i].campaign_id, props.token).then(
          (res) => {
            tempInvites[i].campaign_name = res.data.name;
            setInvites(tempInvites);
          }
        );
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row text-center">
        <section className="col-4" id="campaigns">
          <h3>Your Campaigns</h3>
          <CampaignFilters
            handleCampaignFilterChange={handleCampaignFilterChange}
          />
          {displayData.map((campaign) => {
            return (
              <div className="campaign-list-box">
                <Link
                  to={{ pathname: `/campaign/${campaign.id}` }}
                  className="d-inline"
                >
                  <li
                    key={campaign.id}
                    className="list-group-item list-group-item-action m-3"
                    id="example-campaign"
                    data-id={campaign.id}
                  >
                    <h4 className="d-inline">{campaign.name}</h4>
                  </li>
                </Link>
                <button
                  data-id={campaign.id}
                  className="campaign-dlt-btn btn-danger"
                  onClick={(e) => {
                    deleteCampaign(e.target.getAttribute("data-id"));
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
          <button
            onClick={() => {
              createCampaign();
            }}
          >
            Create Campaign
          </button>
        </section>
        <section className="col-4" id="profile-info">
          <h2>{username ? username : props.userState.username}</h2>
          <img
            src={imageURL ? imageURL : props.userState.image_content}
            width="200"
            height="auto"
            alt={""}
            className="m-1"
          />{" "}
          <br />
          <button onClick={() => setUpdatePic(!updatePic)} className="btn m-1">
            Change Profile Picture
          </button>
          <br />
          {updatePic ? (
            <Avatar
              imageURL={imageURL}
              setImageURL={setImageURL}
              userState={props.userState}
              token={props.token}
              setUserState={props.setUserState}
              setUpdatePic={setUpdatePic}
            />
          ) : null}
          <button onClick={() => setUpdateUsername(!updateUsername)} className="btn m-1">Change Username</button>
          <br />
          {updateUsername ? (
            <Username
                userState={props.userState}
                setUserState={props.setUserState}
                token={props.token}
                setUpdateUsername={setUpdateUsername}
                username={username}
                setUsername={setUsername}
          />
          ): null}
          <button className="btn m-1">Change Email</button>
          <br />
          <button className="btn m-1">Notifications</button>
        </section>
        <section className="col-4" id="character-presets">
          <h3>Your Presets</h3>
          <div id="preset-filters">
            <input className="m-1" />
            <button className="btn m-1" id="player-filter">
              Search
            </button>
            <button className="btn m-1" id="all-filter">
              Filters
            </button>
          </div>
          <ul id="presets-list list-group-flush list-group">
            <li
              className="list-group-item list-group-item-action"
              id="example-preset"
              onClick={() => props.handlePageChange("home")}
            >
              <h4>Knight Rogue</h4>
            </li>
          </ul>
        </section>
      </div>
      <div className="row">
        <ul className="presets-list list-group-flush list-group">
          {invites.map((invite) => {
            return (
              <div className="campaign-list-box">
                <li className="list-group-item list-group-item-action m-3">
                  You are invited to: {invite.campaign_name}
                </li>
                <button
                  className="btn"
                  onClick={(e) =>
                    acceptInvite(
                      e.target.getAttribute("data-campid"),
                      e.target.getAttribute("data-id")
                    )
                  }
                  data-campid={invite.campaign_id}
                  data-id={invite.id}
                >
                  Accept
                </button>
                <button className="btn" onClick={() => declineInvite()}>
                  Decline
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
