import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un titulo';
  const url = 'https://localhost/otracosa.jpg'
  const wrapper = shallow( < GifGridItem title={ title } url={ url } /> );

  test('Debe mostral el componente correctamnete', () => { 
    expect( wrapper ).toMatchSnapshot();
   })
  
  test('Debe tener un párrafo con el title ', () => { 
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );
  })   
   
} )