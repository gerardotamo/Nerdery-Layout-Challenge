import { BaseColor } from '../../config/color';
import { Rectangule } from '../Rectangule/Rectangule';
import { Text } from '../Text/Text';
import * as style from './style';

const Aside = () => {
  return (
    <style.Content color={BaseColor.fieldColor}>
      <style.View>
        <div style={{ display: 'flex' }}>
          <Rectangule backgroundColor={BaseColor.grayColor} borderColor='transparent' />
          <Rectangule backgroundColor={BaseColor.grayColor} borderColor='transparent' />
        </div>
        <div style={{ display: 'flex' }}>
          <Text color={BaseColor.primaryColor} size={12}>Name</Text>
        </div>
      </style.View>
    </style.Content>
  )
}

export default Aside;
