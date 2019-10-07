import Layout from '../components/Layout';
import Head from 'next/head';

const Roadmap = () => (
    <Layout>
	<Head>
        <link href="../static/timeline.css" rel="stylesheet" />
    </Head>
    <div className="container">
        <h1>IPXS Roadmap</h1>
		<ul className="timeline">
			<li>
				<div className="direction-r">
					<div className="flag-wrapper">
						<span className="flag">Project Start</span>
						<span className="time-wrapper"><span className="time">June 2018</span></span>
					</div>
					<div className="desc">Team Formation</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Core Storage Built</span>
						<span className="time-wrapper"><span className="time">Q2 2019</span></span>
					</div>
					<div className="desc">Encoding Layer Working</div>
				</div>
			</li>
			<li>
				<div className="direction-r">
					<div className="flag-wrapper bg-danger">
						<span className="flag">Alpha Network Launch</span>
						<span className="time-wrapper"><span className="time">October 2019</span></span>
					</div>
					<div className="desc">Invite Only</div>
				</div>
			</li>
			<li>
				<div className="direction-l">
					<div className="flag-wrapper">
						<span className="flag">Beta Network Launch</span>
						<span className="time-wrapper"><span className="time">Q4 2019</span></span>
					</div>
					<div className="desc">Onboarding Starts December 2019</div>
				</div>
			</li>
			<li>
				<div className="direction-r">
					<div className="flag-wrapper">
						<span className="flag">Mainnet Launch</span>
						<span className="time-wrapper"><span className="time">Q1 2020</span></span>
					</div>
				</div>
			</li>
		
		</ul>
	</div>
    </Layout>
	
);

export default Roadmap;