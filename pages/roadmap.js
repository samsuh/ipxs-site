import Layout from '../components/Layout';
import Head from 'next/head';

const Roadmap = () => (
    <Layout>
	<Head>
        <link href="../static/timeline.css" rel="stylesheet" />
    </Head>
    <div class="container">
        <h1>IPXS Roadmap</h1>
		<ul class="timeline">
			<li>
				<div class="direction-r">
					<div class="flag-wrapper">
						<span class="flag">Project Start</span>
						<span class="time-wrapper"><span class="time">June 2018</span></span>
					</div>
					<div class="desc">Team Formation</div>
				</div>
			</li>
			<li>
				<div class="direction-l">
					<div class="flag-wrapper">
						<span class="flag">Core Storage Protocol Built</span>
						<span class="time-wrapper"><span class="time">Q1 2019</span></span>
					</div>
					<div class="desc">Uploads and Downloads Working</div>
				</div>
			</li>
			<li>
				<div class="direction-r">
					<div class="flag-wrapper bg-danger">
						<span class="flag">Testnet Launch</span>
						<span class="time-wrapper"><span class="time">Q4 2019</span></span>
					</div>
					<div class="desc">Testnet Onboarding to Begin December 2019</div>
				</div>
			</li>
			<li>
				<div class="direction-l">
					<div class="flag-wrapper">
						<span class="flag">Mainnet Launch</span>
						<span class="time-wrapper"><span class="time">Q1 2020</span></span>
					</div>
					<div class="desc">Mainnet Live.</div>
				</div>
			</li>
			<li>
				<div class="direction-r">
					<div class="flag-wrapper">
						<span class="flag">Additional Featuresets</span>
						<span class="time-wrapper"><span class="time">Q3 2020</span></span>
					</div>
					<div class="desc">Final Deliverables and Transition to Maintenance</div>
				</div>
			</li>
		
		</ul>
	</div>
    </Layout>
	
);

export default Roadmap;