export const projects = [
    {
        platform: 'android',
        name: 'SDSGC App',
        description: `
            <p style='margin-bottom: 8px'>
            An app for managing game characters for the mobile game 
            <b><i>Seven Deadly Sins: Grand Cross</i></b>. 
            </p>
            <h3><u><b>Features</b></u></h3>
            <ul style='margin-bottom: 8px;'>
                <li>
                🟆 Voting system for users to rank certain characters.
                </li>
                <li>
                🟆 Runtime updates for new characters.
                </li>
                <li>
                🟆 User data backups to Firestore
                </li>
                <li>
                🟆 Data stored in Google Spreadsheets
                </li>
            </ul>
            <ul>
                <li>
                    Platform: <b>Android (Playstore)</b>
                </li>
                <li>
                    Language: <b>React Native</b>
                </li>
                <li>
                    Framework: <b>Expo</b>
                </li>
                <li>
                    Backend: <b>Firestore</b>
                </li>
            </ul>
            `,
        image_path: '',
        languages: ['playstore', 'expo', 'react']
    },
    {
        platform: 'android',
        name: 'OSRS Prices',
        description: `
            <p style='margin-bottom: 8px'>
            An app to track real time prices for an in-game marketplace for the game <b><i>Runescape</i></b>.
            </p>
            <h3><u><b>Features</b></u></h3>
            <ul style='margin-bottom: 8px;'>
                <li>
                🟆 Hits the publicly available game API for realtime data.
                </li>
                <li>
                🟆 Graphs the data to selected time intervals.
                </li>
            </ul>
            <ul>
                <li>
                    Platform: <b>Android (Playstore)</b>
                </li>
                <li>
                    Language: <b>React Native</b>
                </li>
                <li>
                    Framework: <b>Expo</b>
                </li>
            </ul>
        `,
        image_path: '/static/images/osrs.png',
        languages: ['playstore', 'expo', 'react']
    }
];
export const languages = { react: 'https://reactnative.dev', expo: 'https://expo.dev' };