import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './Css/home.css';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Card className='card'>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to Soul Pistons
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore our world to see numerous types of cars that are produced by us in short of a time,We take any type of cars to modify and also scarp services, And we make sporting vehicles.
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
            Our store is known for:
            <ul className='list'>
              <li>High-quality modifications</li>
              <li>Experienced mechanics</li>
              <li>one state policy for repairs</li>
              <li>vehicles will be delivered on time</li>
            </ul>
          </Typography>
        </CardContent>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Special Programs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our store is known for top quality works,And our ability to create beats by our hands, we produce and design cars for NASCAR and LE'MANS,we train drivers to participate in competions
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              Explore our programs and find the one that's right for you.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              FACILITIES
            </Typography>
            <Typography variant="body2" color="text.secondary">
             we have tarined professionals to modify and train professional drivers.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              We provide quality services and shipping world wide
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              ACHIEVEMENTS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We won tWo NASCAR   races and six LE'MANS title.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              We believe in holistic development and encourage our tarinees explore their passions beyond races.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <CardContent>
          <Typography variant="h5" component="div">
            Our works
          </Typography>
          <div className="image-container">
            <CardMedia
              component="img"
              alt="Sample Image 1"
              height="200"
              src="https://www.motorsport-total.com/bilder/strecken/m1n_663175/978/1681911917_mst.jpg"
              title="Sample Image 1"
              style={{ marginRight: '16px' }}
            />
            <div style={{ width: '16px' }}></div> {/* Add space */}
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cy_SlHKMjrW4WMxYm-VuWwAKzilHojG0ZQ&usqp=CAU"
              title="Sample Image 2"
            />
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
