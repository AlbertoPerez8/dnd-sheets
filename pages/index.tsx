export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center">
			<div className="text-2xl text-center">Pick the coolest Pokemon</div>
      <div className="p-4"/>
			<div className="border rounded p-8 flex justify-between max-w-2xl items-center">
				<div className="w-16 h-16 bg-blue-500" />
				<div className="p-8">VS</div>
				<div className="w-16 h-16 bg-yellow-500" /> <div></div>
			</div>
		</div>
	)
}
