import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { Input, FormBtn } from "../Form";
import Table from "../Table/Table";
import NavBtn from "../NavButton";
import { Link } from "react-router-dom";
import "../links.css";
import { Redirect } from "react-router-dom";

//  routes to this page is dependant on the jobNumber

class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
      jobs: [],
      parts: [],
      jobNumber: props.match.params.jobNumber,
      sku: "",
      id: "",
      partQuantity: "",
      material: "",
      materialQuantity: "",
      partPrice: "",
      partName: "",
      notes: "",
			completed: false,
			materialList: {},
			partList: {},
    };
  }

  componentDidMount() {
    this.motherLoad();
  }

  motherLoad = () => {
    this.loadJob();
		this.getMaterials();
		this.loadParts();
  };

  loadJob = () => {
    API.getJob(this.state.jobNumber)
      .then(res => {
        this.setState({
          sku: res.data.sku,
          materialQuantity: res.data.materialQuantity,
          id: res.data._id,
          material: res.data.material,
          partPrice: res.data.partPrice,
          partQuantity: res.data.partQuantity,
          notes: res.data.notes,
          partName: res.data.partName
        });
      })
      .catch(err => console.log(err));
  };

  getMaterials = () => {
    API.getMaterials()
      .then(res => this.setState({ materialList: res.data }))
      .catch(err => console.log(err));
	};
	
	loadParts = () => {
		API.getParts()
			.then(res =>
				this.setState({ partList: res.data })
			)
			.catch(err => console.log(err));
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  deleteJob = id => {
    API.deleteJob(this.state.id)
      .then(res => this.loadJob())
      .catch(err => console.log(err));
  };

  removeMaterials = (id) => {
		const inputNum = this.state.materialList[this.state.jobNumber].materialQuantity;
		
    API.updateMaterial({
				name: this.state.material,
				materialQuantity: inputNum - this.state.materialQuantity ,
		})
		.then(res => console.log("end materials"))
		// .then(res => this.deleteJob())
		.catch(err => console.log(err, "save materials error"));
  };

  addPart = id => {
		
		for (let i = 0; i < this.state.partList.length; i++) {
			if(this.state.partName === this.state.partList[i].partName){
				// console.log("add parts", this.state.partList[i].partQuantity);

				const updatePartQty = this.state.partQuantity + this.state.partList[i].partQuantity;
				// console.log("new parts", updatePartQty);

				console.log("part id", this.state.partName);
				
				// console.log("testing", this.state);
				API.updatePart({
					partName: this.state.partName,
					sku: this.state.sku,
					partQuantity: updatePartQty,
					material: this.state.material,
					partPrice: this.state.partPrice
				})
				.then(res => console.log("end parts"))
					// .then(res => this.removeMaterials())
					.catch(err => console.log(err));
			}
		}
		
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.partQuantity, this.state.partName)

    if (this.state.partQuantity && this.state.partName) {
      console.log("form submitted");
      // this.removeMaterials();
      this.addPart();
      // this.deleteJob();
    }
  };

  render() {
    // If job is completed, return to current jobs page
    if (this.state.completed) {
      return <Redirect to={"/jobs/current"} />;
    }

    return (
      <React.Fragment>
        <Row>
          <Col size="md-12">
            <Table>
              <div className="subLinks">
                <div className="link">
                  <NavBtn>
                    <Link className="linkStyle" to="/jobs/current">
                      Jobs
                    </Link>
                  </NavBtn>
                </div>
                <div className="link">
                  <NavBtn>
                    <Link className="linkStyle" to="/jobs/history">
                      History
                    </Link>
                  </NavBtn>
                </div>
                <div className="link">
                  <NavBtn>
                    <Link className="linkStyle" to="/jobs/create">
                      Create
                    </Link>
                  </NavBtn>
                </div>
              </div>
              <form>
                <label htmlFor="jobNumber">Job Number</label>
                <Input
                  value={this.state.jobNumber || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="jobNumber"
                  // placeholder="jobNumber (required)"
                />
                <label htmlFor="material">Material Used</label>
                <Input
                  value={this.state.material || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="material"
                  // placeholder="sku of material used (required)"
                />
                <label htmlFor="materialQuantity">Material quantity</label>
                <Input
                  value={this.state.materialQuantity || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="materialQuantity"
                  // placeholder="quantity of materials used (required)"
                />
                <label htmlFor="partName">Part Name</label>
                <Input
                  value={this.state.partName || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="partName"
                  // placeholder="name of individual part"
                />
                <label htmlFor="partPrice">Part Price</label>
                <Input
                  value={this.state.partPrice || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="partPrice"
                  // placeholder="price of individual part"
                />
                <label htmlFor="sku">Part SKU</label>
                <Input
                  value={this.state.sku || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="sku"
                  // placeholder="Part sku (required)"
                />
                <label htmlFor="partQuantity">Parts Quantity</label>
                <Input
                  value={this.state.partQuantity || ""}
                  onChange={this.handleInputChange}
                  readOnly={true}
                  name="partQuantity"
                  // placeholder="quantity of parts created (required)"
                />
                <textarea
                  value={this.state.notes || ""}
                  onChange={this.handleInputChange}
                  name="notes"
                  placeholder="notes (Optional)"
                />
                <FormBtn
                  // disabled={!(this.state.sku && this.state.partQuantity)}
                  onClick={this.handleFormSubmit}
                >
                  <Link className="linkStyle" to="/jobs/current">
                    Complete Job{" "}
                  </Link>
                </FormBtn>
              </form>
            </Table>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default JobDetail;
