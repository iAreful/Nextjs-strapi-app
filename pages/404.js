/** @format */

import Link from "next/link";
const url =
	"https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png";
const NotFound = () => {
	return (
		<div className='w-11/12 mx-auto my-4 flex flex-col justify-center items-center gap-y-4'>
			<h1 className='text-5xl underline text-center'>Ooops...🧐</h1>
			<p className='text-2xl'>
				Go back to the{" "}
				<Link href='/'>
					<a className='text-3xl animate-pulse text-indigo-600 font-bold'>
						Homepage
					</a>
				</Link>
			</p>
			<img className='w-6/12 mx-auto h-96' src={url} alt='404 not found' />
			<h2 className='text-2xl'>That page cannot be found 🙄</h2>
			<p className='text-2xl'>
				Go back to the{" "}
				<Link href='/'>
					<a className='text-2xl animate-pulse text-indigo-600 font-bold'>
						Homepage
					</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
