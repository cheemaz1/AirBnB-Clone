import React from "react";
import ListingItem from "./listing_item";
import MapContainer from "../mapbox/map_container";
import { ThumbUpAlt } from "@material-ui/icons";
import SentimentDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentDissatisfiedTwoTone";
class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noListing: false };
  }

  componentDidMount() {
    this.props
      .fetchListings({
        city: this.props.match.params.city,
      })
      .then(listings => {
        if (Object.values(listings.listings).length === 0) {
          this.setState({ noListing: true });
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.city !== this.props.match.params.city) {
      
      this.props
        .fetchListings({
          city: this.props.match.params.city,
        })
        .then(listings => {
          if (Object.values(listings.listings).length === 0) {
            this.setState({ noListing: true });
          } else {
            this.setState({ noListing: false });
          }
        });
    }
  }

  render() {
    if (this.props.listings.length === 0 && !this.state.noListing) return null;
    
    if (this.state.noListing) {
      return (
        <div className="no-listings-container">
          <div className="no-listings">
            <p className="no-listings-text"> No Listings Here</p>{" "}
            <span className="no-listings-sad-face">
              <SentimentDissatisfiedTwoToneIcon style={{ fontSize: 200 }} />
            </span>{" "}
          </div>
        </div>
      );
    }

    let filteredListings;
    let mappedListings;
    if (this.props.match.params.city) {
      filteredListings = this.props.listings.filter(
        listing => listing.city === this.props.match.params.city
      );
      mappedListings = filteredListings.map((listing, i) => (
        <ListingItem key={`${listing.title}${i}`} listing={listing} />
      ));
    } else {
      mappedListings = this.props.listings.map((listing, i) => (
        <ListingItem key={`${listing.title}${i}`} listing={listing} />
      ));
    }
    return (
      <div className="listings-index-container">
        <div className="listings">{mappedListings}</div>
        <div className="map-container-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default ListingIndex;
