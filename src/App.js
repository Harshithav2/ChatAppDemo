import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '1e7102b0-afb9-4b79-803a-8ba1b4793693';

const App = () => {

	if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID={projectID}
			// userName="chathaproj"
			// userSecret="123123"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
	);
}

export default App;