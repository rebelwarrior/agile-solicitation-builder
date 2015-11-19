var React = require('react');

var defaultStakeholdersText = "Stakeholders for this project include, but are not limited to, ___, ___, the Contracting Officer’s Representative (COR) and the Contracting Officer.";

var Objective = React.createClass({
	getInitialState: function() {
		return {
			docType: localStorage.getItem("docType"),
			agency: localStorage.getItem("agency"),
		};
	},
	save: function(cb) {
		// TODO: save data
		setTimeout(cb, 500);
	},
	render: function() {
		return (
			<div>
				<div className="main-heading">Statement of Objectives</div>
				<p>This section has 6 components.</p>

				<div className="sub-heading">General Background</div>
				<p>Please provide several paragraphs about your project's history, mission, and current state.</p>

				<textarea className="form-control" rows="9"></textarea>

				<div className="sub-heading">Program History</div>
				<p>If you have any information about the current vendors and specific technology being used please provide it here.</p>

				<textarea className="form-control" rows="10"></textarea>

				<div className="sub-heading">Objectives</div>
				<p>Note: The Statement of Objectives will be removed at time of award and replaced with the Offeror’s Performance Work Statement. All listed objectives and requirements shall be included as part of the Offeror’s Performance Work Statement.</p>

				<div className="sub-heading">Overview </div>
				<p>Who is your user(s)? Has anyone working on this project done any user research? (Learn more <a href="https://playbook.cio.gov/#play1" target="_blank">here</a>!)</p>

				<p>What are your top five goals for this project? </p>
				<ol>
					<li>
						<input type="text" className="form-control" placeholder="objective"></input>
					</li>
				</ol>

				<div className="sub-heading">Specific Tasks and Deliverables</div>
				<ul>
					<li>Research, Insights, and Synthesis</li>
					<li>Prototype Design Solutions</li>
					<li>Recommendations</li>
					<li>Program Management and Stewardship</li>
				</ul>

				<div className="sub-heading">Deliverables</div>
				<p>Would you like to use ...?</p>
				<p>Deliverables under this {this.state.docType} are defined as the completion and acceptance according to the “Definition of Done” of the iterations completed, which are based on the contractor’s Agile Software Development methodology. This methodology defines the repeatable process of providing development and deployment services in small iterations lasting two to five weeks which results in usable software, data, or product, which have little to no inherent defects. Each iteration shall be defined in the Performance Work Statement but should document how planning, requirement analysis (user story building), design, coding, testing, quality assurance, and documentation will all meet the contractor’s “Definition of Done”.</p>
				<p>Each deliverable shall incorporate agency IT requirements as detailed in the Appendix of this document and the <a href="https://playbook.cio.gov" target="_blank">United States Digital Service Playbook</a> standards and be compliant with Section 508.</p>
				<div>Deliverables - https://quip.com/SFN4AAN4NA2F</div>
				<p>Functional Requirements, translated into Epics and User Stories that will be used to populate the Product Backlog may include, but are not limited to:
					  UX requirements gathering
					•	Initial application design and implementation
					•	System configuration to support business processes
					•	Integration for input and output methods
					•	Workflow design and implementation
					•	Overall collaboration of applications
					•	Enhancements, patches, and updates to applications, data, or cloud systems
					•	Data import of records collected from legacy systems
					•	Automated testing
					•	Training of end users on the systems</p>

				<div className="sub-heading">Stakeholders</div>
				<p>Feel free to add additional stakeholders as is relevant to your project.</p>
				<textarea className="form-control" rows="4" placeholder="1-2 sentences" defaultValue={defaultStakeholdersText}>					
				</textarea>

				<div className="sub-heading">Agile Development Management Plan (ADMP) and Key Personnel</div>
				<p>Offerors shall propose an Agile Development Management Plan (ADMP) which demonstrates how the Offeror intends to manage, develop, implement, and maintain the requirements described in this SOO and the RFQ. The plan shall include, at a minimum:</p>
				<ul>
					<li>Contact information for all senior leaders and an organizational chart showing the Offeror’s organizational hierarchy and reporting structure, with specific designation of individuals as Key Personnel;
					</li>
					<li>Management resources;
					</li>
					<li>Technical resources and skill sets required to develop, implement, and maintain the proposed solution; and
					</li>
					<li>Details on the management of the Offeror’s team that will be on-site.
					</li>
				</ul>
				<p>The ADMP and the listing of Key Personnel shall become part of the {this.state.docType} upon award.</p>

				<div className="sub-heading">Kick-Off Meeting/Post-Award Conference</div>
				<p>Is there a required place of performance? What region the work will be done?</p>

				<p>The agency's relevant personnel, Contracting Officer, and COR shall hold a Kick-Off meeting/Post-Award Conference in Washington, DC with contractor’s team and other relevant Government staff to review and clarify the project’s objectives, expectations from the Government, and address any questions the Contractor may have.</p>
				<p>The Contractor shall provide and collaborate with the COR on an agenda for this meeting. Discussion topics shall include, but not be limited to: introduction of the Contractor and Government Staff; understanding of the specific tasks and subtasks; project management expectations; agreement on meeting schedules; and agreement on initial delivery dates.</p>
				<p>The Kick-Off meeting/Post-Award Conference will take place within 10 days from award and will be scheduled by the Contracting Officer.</p>

				<div className="sub-heading">System Documentation and Training</div>
				<p>Would you like a collaborative workspace (phrasing)
				strongly encourage the use of a collaborative environment, do you have one?
				GSA - google drive, other places, ???
				check with agency policy to see which collaboration software is allowed. ex: box.com, google drive/google docs, 
				code - version control, define what is, examples. (encourage certain options, but vendor will specify)
				for documents is separate
				</p>
				<p>Github: version control</p>
				<p>The Contractor shall:</p>
				<ul>
					<li>Provide all system documentation and training to {this.state.agency} staff (in-person, video, and via webinar).</li>
					<li>Develop and provide effective training materials of all deliverables, including, but not limited to, “train the trainer” documentation.</li>
					<li>Conduct “train the trainer” sessions for {this.state.agency} staff.</li>
					<li>Consult with the COR to determine what is appropriate, effective, and essential for training.</li>
				</ul>

				<p className="new-content">Furthermore, documentation should be updated with each iteration. This includes technical documentation including but not limited to setup instructions in the README.md, user reseach findings etc. All documents should be stored electronically such that the CO, PM, and any other relevant government employees who have been granted permissions can access them at any time.</p>

			</div>
		);
	},
});

module.exports = Objective;