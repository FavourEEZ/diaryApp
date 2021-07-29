import React, {useState} from 'react';
import DiaryHome from './screens/diaryHome';
import Navigator from './routes/homeStack' //Default export, we can call it what we want.

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
        //TODO Add Header to Navigation Header (Netninja ReactNative lesson #25)
        //TODO Styling!!! - Delete button. 
        //Home screen page displays only the title of entries. Clicking on those entries takes you to see the full thing.
        //Add a button next to each entry to delete it. 
        //Add date - Then sort each diary entry by date. 
        //Star each diary entry - making them always land my the top. To star: hoover on entry title and a star button should appear.
        //Add a backend funcitonality
export default function App(){
  return(
    <Navigator/>
   // <DiaryHome/>
  )
}
