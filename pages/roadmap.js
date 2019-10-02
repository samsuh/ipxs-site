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
						<span class="flag">Beta In Progress</span>
						<span class="time-wrapper"><span class="time">2018 - present</span></span>
					</div>
					<div class="desc">Core Storage Protocol Built!</div>
				</div>
			</li>
			<li>
				<div class="direction-l">
					<div class="flag-wrapper">
						<span class="flag">Beta Launch</span>
						<span class="time-wrapper"><span class="time">By the end of 2019</span></span>
					</div>
					<div class="desc">Beta will have blah blah features.</div>
				</div>
			</li>
			<li>
				<div class="direction-r">
					<div class="flag-wrapper">
						<span class="flag">Mainnet Launch</span>
						<span class="time-wrapper"><span class="time">Q1 2020</span></span>
					</div>
					<div class="desc">Mainnet will have blahblah features.</div>
				</div>
			</li>
			<li>
				<div class="direction-l">
					<div class="flag-wrapper">
						<span class="flag">Milestone 4</span>
						<span class="time-wrapper"><span class="time">QX 2020</span></span>
					</div>
					<div class="desc">Description goes here.</div>
				</div>
			</li>
			<li>
				<div class="direction-r">
					<div class="flag-wrapper">
						<span class="flag">Milestone 5</span>
						<span class="time-wrapper"><span class="time">QX 2020</span></span>
					</div>
					<div class="desc">Final Deliverable and Continued blahblah.</div>
				</div>
			</li>
		
		</ul>
	</div>
    </Layout>
	
);

export default Roadmap;