import React, {Component} from 'react';
import { Grid, Image, Button, Progress, Segment } from 'semantic-ui-react'

const Home = () => {
  return (
    <Grid divided='vertically'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <div className="slider-wrapper">
            <h1>CUSTOM WEB DEVELOPMENT</h1>
            <p>Do you need a complex, web-based application or integration? For large organizations and businesses, app development can be the best way to create and fulfill custom solutions to help your customers connect with your company.</p>
            <Button>Read More</Button>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <h3>Our <span>Services</span></h3>
        <p>WE OFFER TOTALLY INTEGRATED SERVICE BEYOND THE WEB, DATA ANALYSIS AND MOBILE</p>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <i class="fa fa fa-clone"></i>
          <h3>Web Development</h3>
          <p>The advantage of custom web applications is that they are tailored exactly to the way your business works.</p>
          <Button>Read more</Button>
        </Grid.Column>
        <Grid.Column>
          <i class="fa fa fa-clone"></i>
          <h3>Data Analysis</h3>
          <p>We offer full-cycle Data Analysis starting from data gathering to profound modeling and suggestions on implementation.</p>
          <Button>Read more</Button>
        </Grid.Column>
        <Grid.Column>
          <i class="fa fa fa-clone"></i>
          <h3>Mobile Development</h3>
          <p>In the fast paced mobile world, Neomic specializes in designing, coding and distributing your mobile app.</p>
          <Button>Read more</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <i class="fa fa fa-clone"></i>
          <h3>Creative</h3>
          <p>Whether it’s mobile apps, responsive websites or creative campaigns, we create beautiful online experiences that engage and convert naturally and effectively.</p>
          <Button>Read more</Button>
        </Grid.Column>

      </Grid.Row>

      <Grid.Row columns={1}>
        <h3>Our <span>Process</span></h3>
        <p>OUR PROCESS IS A FLEXIBLE FRAMEWORK THAT ADAPTS, EVOLVES AND RESPONDS TO YOUR NEEDS</p>
      </Grid.Row>

      <Grid.Row columns={4}>
        <Grid.Column>
          <div>1</div>
          <h3>Concept</h3>
          <p>During this phase of our software development process we contact with you to determine objectives and goals.</p>
        </Grid.Column>
        <Grid.Column>
          <div>2</div>
          <h3>Development</h3>
          <p>Our developers build the application logic and data-model layer for the business rules that drive the core value proposition.</p>
        </Grid.Column>
        <Grid.Column>
          <div>3</div>
          <h3>Testing</h3>
          <p>We work directly with your personnel to fine tune the application to insure that the software will meet your needs.</p>
        </Grid.Column>
        <Grid.Column>
          <div>4</div>
          <h3>Finish</h3>
          <p>The final step of our software development process is to put the application in its production environment and to start distributing.</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <h1>We Provide Best Solutions do more <span>together</span> with us</h1>
          <p>We live and breathe digital marketing, and in an industry that is constantly shifting and changing shape, it’s our business to keep up with it. At Neomic, we operate by learning, educating, innovating, creating, and above all, delivering results. If we can do it for our own business, we can do it for yours, too.</p>

        </Grid.Column>
        <Grid.Column>
          <h5>Our Expertise</h5>
          <h6>Backend Development</h6>
          <Progress percent={90} progress />
          <h6>Data Analysis</h6>
          <Progress percent={80} progress />
          <h6>Mobile Development</h6>
          <Progress percent={78} progress />
          <h6>Frontend Development</h6>
          <Progress percent={85} progress />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <h3>Recent <span>Works</span></h3>
        <p>CHECKOUT OUR LATEST CASES</p>
      </Grid.Row>

      <Grid.Row textAlign='center'>
        <Grid.Column>
          <Image />
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;