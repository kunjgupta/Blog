import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import BlogContext, { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

//This commented code is working 
// export default createAppContainer(navigator)
const App = createAppContainer(navigator)

export default () => {
  //Below commented code is working 
  // return <BlogContext.Provider value ={5500} >
  //   <App /> 
  //   </BlogContext.Provider>

  //This is not working 
  return <BlogProvider >
  <App /> 
  </BlogProvider>

  //Below commented code is working 
  // return <App />
}
