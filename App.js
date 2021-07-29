import React, {useState} from 'react';
import DiaryHome from './screens/diaryHome';

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
        //TODO SDAdd navigations / screens
        //Home screen page displays only the title of entries. Clicking on those entries takes you to see the full thing.
        //Add a button next to each entry to delete it. 
        //Add date - Then sort each diary entry by date. 
        //Star each diary entry - making them always land my the top. To star: hoover on entry title and a star button should appear.
        //Add a backend funcitonality
export default function App(){
  return(
    <DiaryHome/>
  )
}
