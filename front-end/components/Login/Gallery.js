import React, { Component } from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import Picture from '../Core/Picture'

const RowGallery = styled(Row)`
	.slideshow {
  position: relative;
  overflow: hidden;
}
.images {
  background: url(slideshow.jpg);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  animation: slideshow 10s linear infinite;
}
@keyframes slideshow {
  0%    { left: 0; }
  100%  { left: -200%; }
}
`

class Gallery extends Component {
    render() {
			return (
				<Container fluid>
					<Row className='slideshow'>
						<Picture pic='1' />
						<Picture pic='2' />
						<Picture pic='3' />
						<Picture pic='4' />
						<Picture pic='5' />
						<Picture pic='6' />
					</Row>
				</Container>
        );
    }
}

export default Gallery;