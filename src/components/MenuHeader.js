import styled from 'styled-components'
import MenuItem from './MenuItem'

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuArray = ["Elektronik, Cep Telefonu", "Ev, Yaşam, Ofis, Kırtasiye",
"Anne, Bebek, Oyuncak", "Saat, Moda, Takı, Ayakkabı", "Kitap, Müzik, Hobi", 
"Spor, Outdoor", "Giyim, Kırtasiye", "Kırtasiye, Outdoor", "Sağlık, Bakım, Kozmetik",
"Oto, Bahçe, Yapı Market", "Petshop", "Cimri Markette"];

function MenuHeader() {
  return (
    <div className="bg-white border-bottom">
      <div className="container">
        <MenuWrapper>
          {MenuArray.map((item) => {
            return <MenuItem title={item} link="/" />
          })}
        </MenuWrapper>
      </div>
    </div>
  )
}

export default MenuHeader