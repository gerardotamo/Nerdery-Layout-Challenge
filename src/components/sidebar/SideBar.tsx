import List from '../list/List';
import * as style from './syled'

const SideBar = () => {
  const options = ["Home", "My files", "Recent Files", "Shared Filed",
        "Filed Request", "Trash"
    ];
    const options2 = ["Upload files", "Upload folder", "New folder", "More",
    ];

  return (
    <style.Content>
      <div>
        <style.ColorPalette />
        <List options={options}/>
      </div>
      <div>

      </div>
    </style.Content>
  )
}

export default SideBar;