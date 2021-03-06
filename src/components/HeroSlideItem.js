import styled from 'styled-components'

const Item = styled.div`
  max-height: 410px;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 410px;
  object-fit: cover;
  overflow: hidden;
`;

function HeroSlideItem(props) {
  return (  
    <Item>
        <a href={props.link} className="d-block" title={props.title}>
            <Image className="w-100" src={props.image} alt={props.title} />
        </a>
    </Item>
  )
}

export default HeroSlideItem