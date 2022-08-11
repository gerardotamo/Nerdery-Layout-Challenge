import { useState } from 'react';
import { BaseColor } from '../../config/color';
import { Divider } from '../../config/Divider';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import List from '../list/List';
import * as style from './syled'

const SideBar = () => {
  const options = ["Home", "My files", "Recent Files", "Shared Filed",
    "Filed Request", "Trash"
  ];
  const options2 = ["Upload files", "Upload folder", "New folder", "More",
  ];

  const [position, setPosition] = useState<number>(0);

  return (
    <style.Content>
      <div>
        <style.ColorPalette />
        <List options={options} position={position} />
        <Divider />
      </div>

      <div style={{ alignItems: 'center',
                display: 'flex',
                flexDirection: 'column', justifyContent: 'space-around', marginBottom: '15px' }}>
        <style.DialogContent >
          <List options={options2} />
        </style.DialogContent>
        <Button heigth='30px' width='67%' color={BaseColor.secondaryColor}>
          <Text color={BaseColor.whiteColor} size={10}>
            Create New
          </Text>
        </Button>
      </div>
    </style.Content>
  )
}

export default SideBar;