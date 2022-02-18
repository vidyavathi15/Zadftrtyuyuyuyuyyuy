<About the Project>
In this project we can get all countrywide covid19 cases and also statewise covid19 cases along with district wise , we can get no of confirmed, active, recovered, deceased cases both in graph reprasentation and line chart representation. By seeing this we can get an idea of which state has maximum number of covid cases, and also according to district wise .

### Third-party-packages-used:

1.Figma 2.npm-recharts What is Figma? Figma is a vector graphics editor and prototyping tool which is primarily web-based. we can easily export images , and also related css styling easily import from Figma. 2.npm-recharts

This contains so many area charts , I used Both BarGraphs and LineCharts In BarGraph all data is reprasented in bars In Line chart all data according date wise all data reprasented, by using line format The app must has the following functionalities

Users can be able to navigate to Home, About routes using links in Navbar

The website see in different plattformes i.e, responsive in mobile view, tablet view as well (Use Media Queries to achieve the responsive website)

### Home Route

An HTTP GET request should be made to the Home Route API URL Loader should be displayed while fetching the data After the data is fetched successfully, Stats of Confirmed, Active, Recovered, Deceased cases of India should be equal to the respective data received from the response List of State/UT should be displayed with corresponding Confirmed, Active, Recovered, Deceased cases count When the Ascending Icon (FcGenericSortingAsc react-icon) is clicked, then the list of State/UT should be sorted with Ascending Order based on State/UT name When the Descending Icon (FcGenericSortingDesc react-icon) is clicked, then the list of State/UT should be sorted with Descending Order based on State/UT name Footer should be displayed as shown in the Figma Search Functionality

Search should be case insensitive. This means Searching for AN or an or An should give the same search results When the State/UT is searched by using the State/UT name, then the list of State/UT names matched with the search text should be displayed When the Specific State/UT is clicked in the searched State/UT, then the page should be navigated to the Specific State/UT State-Specific Route

An HTTP GET request should be made to the State-Specific Route API URL Loader should be displayed while fetching the data After the data is fetched successfully, State name and last updated date should be equal to the State name received from the response Stats of Confirmed, Active, Recovered, Deceased cases of specific state should be equal to the respective data received from the response Tested count should be equal to the tested count received from the response Initially districts with Descending order of their Confirmed Cases should be displayed in the Top Districts When the Active Cases card is clicked, then the Top Districts and Bar Graph should be changed to Descending order by their Active Cases count When the Confirmed Cases card is clicked, then the Top Districts and Bar Graph should be changed to Descending order by their Confirmed Cases count When the Recovered Cases card is clicked, then the Top Districts and Bar Graph should be changed to Descending order by their
Recovered Cases count When the Deceased Cases card is clicked, then the Top Districts and Bar Graph should be changed to Descending order by their Deceased Cases count Bar Graph should be displayed with the last 10 days of Covid19 cases data Initially for Spread Trends, Daily Data should be displayed Footer should be displayed as shown in the Figma Not Found Route

When a random path is provided in the URL, then the page should be navigated to the Not Found Route About Route

An HTTP GET request should be made to the About Route API URL Loader should be displayed while fetching the data After the data is fetched successfully, the response received should be displayed List of faqs should be displayed Footer should be displayed as shown in the Figma Header

When the COVID19INDIA heading element in the Header is clicked, then the page should be navigated to the Home Route When the Home link in the Header is clicked, then the page should be navigated to the Home Route When the About link in the Header is clicked, then the page should be navigated to the My About Route Get all states data from the response of Get Countrywide covid19 cases API by mapping the state’s list that we have provided you in the App.js file

If you receive any type of covid19 cases count of a state as undefined from the API call, store that value as 0

### Example:- You have received the confirmed cases count, population for the State Goa as undefined so instead of storing undefined store confirmed cases of Goa as 0. Like this for all states and districts store 0 if you receive any count as undefined

Your code will contain a Counter Component in the path src/components you can modify the component based on your use case or you can ignore it

Formulae for active cases activeCases = confirmedCases-(recoveredCases+deceasedCases)

Adding individual states Covid19 data will give you national wide Covid19 data

Don’t wrap the Bar Chart or Line Chart with ResponsiveContainer

Routes:

The Home Route should contain the pathname as /

The State-specific Route should contain the pathname as /state/:stateCode

Note: use the particular state code in place of id The About Route should contain the pathname as /about

### Header:

Your code should contain a Header Component in the path src/components Footer:

Your code should contain a Footer Component in the path src/components

The Footer component should consist of all social icons from the react-icons third-party library

The Footer component should consist of the VscGithubAlt react icon

The Footer component should consist of the FiInstagram react icon

The Footer component should consist of the FaTwitter react icon

Home Route:

The Loader container should contain the test id with value as homeRouteLoader

The States Search results unordered list should contain the test id with value as searchResultsUnorderedList

The Search bar should contain the BsSearch react icon

The State Search results list item should contain a BiChevronRightSquare react icon

The Confirmed cases card should contain the test id with value as countryWideConfirmedCases

The Confirmed cases image in the Confirmed cases container should contain the alt text as country wide confirmed cases pic

The Recovered cases card should contain the test id with value as countryWideRecoveredCases

The Recovered cases image in the Recovered cases container should contain the alt text as country wide recovered cases pic

The Active cases card should contain the test id with value as countryWideActiveCases

The Active cases image in the Active cases container should contain the alt text as country wide active cases pic

The Deceased cases card should contain the test id with value as countryWideDeceasedCases

The Deceased cases image in the Deceased cases container should contain the alt text as country wide deceased cases pic

The Statewise covid19 data table should contain the test id with value as stateWiseCovidDataTable

The FcGenericSortingAsc react icon should be wrapped with an HTML button element and the Button should contain the test id value as ascendingSort

The FcGenericSortingDesc react icon should be wrapped with an HTML button element and the Button should contain the test id value as descendingSort

Place the ascending sort icon and descending sort icon in an HTML container element with the test id attribute value stateWiseCovidDataTable

Place the total countrywide confirmed cases count, the text Confirmed and the image of the confirmed case inside of the HTML container element with the test id attribute value countryWideConfirmedCases

Place the total countrywide active cases count, the text Active and the image of the active case inside of the HTML container element with the test id attribute value countryWideActiveCases

Place the total countrywide recovered cases count, the text Recovered and the image of the recovered case inside of the HTML container element with the test id attribute value countryWideRecoveredCases

Place the total countrywide deceased cases count, the text Deceased and the image of the deceased case inside of the HTML container element with the test id attribute value countryWideDeceasedCases

Wrap all the list items of the HTML unordered list element with the test id attribute value searchResultsUnorderedList with Link from react-router-dom

### State-specific Route

<NOTE> : Wrap all the Line charts with an HTML container element and assign test id attribute value as lineChartsContainer to that HTML container element

The GET State details API Loader container should contain the test id with value as stateDetailsLoader

The GET Timeline details API Loader container should contain the test id with value as timelinesDataLoader

The State-specific Confirmed cases card should contain the test id value as stateSpecificConfirmedCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific confirmed cases pic

The State-specific Active cases card should contain the test id value as stateSpecificActiveCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific active cases pic

The State-specific Recovered cases card should contain the test id value as stateSpecificRecoveredCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific recovered cases pic

The State-specific Deceased cases card should contain the test id value as stateSpecificDeceasedCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific deceased cases pic

Place the total State-specific confirmed cases count, the text Confirmed and the image of the confirmed case inside of the HTML container element with the test id attribute value stateSpecificConfirmedCasesContainer

Place the total State-specific active cases count, the text Active and the image of the active case inside of the HTML container element with the test id attribute value stateSpecificActiveCasesContainer

Place the total State-specific recovered cases count, the text Recovered and the image of the recovered case inside of the HTML container element with the test id attribute value stateSpecificRecoveredCasesContainer

Place the total State-specific deceased cases count, the text Deceased and the image of the deceased case inside of the HTML container element with the test id attribute value stateSpecificDeceasedCasesContainer

The Top Districts unordered list should contain the test id attribute with value as topDistrictsUnorderedList

About Route

The Loader container should contain the test id value as aboutRouteLoader

The Faqs unordered list should contain the test id value as faqsUnorderedList

</details>

Resources

<details>
<summary>Data fetch URLs</summary>

### Home Route:

Get stats of confirmed, active, recovered, deceased cases state wise (<u>sum of state wise data will give you national wise data</u>) :

'https://apis.ccbp.in/covid19-state-wise-data'

State-Specific Route:

Get tested count, last updated date and stats of confirmed, active,recovered, deceased cases in specific states:

'https://apis.ccbp.in/covid19-state-wise-data' //(the response contains stats of all the States, you can use a state code (Ex:- "AP") to get specific state stats.)

Get districts (sort to show Top Districts):

'https://apis.ccbp.in/covid19-state-wise-data' //(the response contains stats of all the States, you can use a state code (Ex:- "AP") to get specific state stats.)

Sample Response for the API Url https://apis.ccbp.in/covid19-state-wise-data:

{ "AP":{ "districts":{ "Anantapur":{ "total":{ "confirmed":157823, "deceased":1093, "recovered":156679, "tested":787085, "vaccinated1":2659813, "vaccinated2":1556657 } } }, "meta":{ "date":"2021-10-28", "last_updated":"2021-10-28T20:20:18+05:30", "population":397000, "tested":{ "date":"2021-10-27", "source":"https://dhs.andaman.gov.in/NewEvents/847.pdf" } }, "total":{ "confirmed":7651, "deceased":129, "recovered":7516, "tested":592748, "vaccinated1":293644, "vaccinated2":195689 } } {...} } Get timelines to show spread trends (use timelines data for rendering Bar chart, Line chart and other recharts by date-wise):

'https://apis.ccbp.in/covid19-timelines-data/AP' //(change state code in URL for other states)

//(or)

'https://apis.ccbp.in/covid19-timelines-data' //(the response contains stats of all the States, you can use a state code (Ex:- "AP") to get specific state stats.)

Sample Response

{ "AN": { "dates": { "2021-09-09": { "total": { "confirmed": 7577, "deceased": 129, "recovered": 7441, "tested": 508157, "vaccinated1": 267126, "vaccinated2": 112124 } }, "2021-09-09": {...} } } } About Route:

Get faqs:

'https://apis.ccbp.in/covid19-faqs'

Sample Response

{ "faq": [ { "answer": "No.", "category": "General", "qno": "1", "question": "Are you official?" } ] } version}
