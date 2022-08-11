import { useState } from 'react';
import { Divider } from '../../config/Divider';
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

      <style.Content style={{justifyContent: 'space-around', alignItems:'center'}}>
        <style.DialogContent>

        </style.DialogContent>
      </style.Content>
    </style.Content>
  )
}

export default SideBar;