1. First in order to start from scratch we have to remove the boiler plate with the command:

        '''npm run reset-project'''

Now the app folder has only two files, the index.tsx and the _layout.tsx. All other folders and files have been moved to the app-example folder which you an delete if you want.
To run your app, you do:
        
        'npm run start'
1. (Expo Router Tab) - Now, we will add implement the atb navigation for our app. Expo 
Router is in-built into expo. It consist of folder/file based routing, so you
do not need to configure anything. First, create (tabs) folder inside the app folder.
Then, create four files inside tabs folder: profile.jsx, home.jsx, profile.jsx and _layout.jsx.
The files apart from the _layout.tsx in (tabs) will just return the JSX for the screen.

- inside _layout.tsx in (tabs): we will define the layout for our tabs. We will use
the <Tab.> component and inside define the three <Tab.Screen> for each tab with their name and options props. At the top level <Tab.> we can also use the screenOptions prop to define tab bar options like the headerShown and the tabBarActiveTintColor.

- Also in the _layout.tsx in the app folder, do the <Stack> component and inside it define the <Stack.Screen> with screen name prop pointing to "(tabs)" and options prop headerShow: false.
  

- Also use Redirect component with the href prop pointing to '/home' imported. This is imported from expo-Router.

*https://icons.expo.fyi/* for expo icon search. Specifically, go for ionicons, import them and use them as follows: