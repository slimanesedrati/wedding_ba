import Image from "next/image"

// pn = programme name
const ProgrameCard = ({imgsrc,Pname,Pdate,Plocation,Padresse,reverse}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-24  ">
        <div className={`flex justify-center items-center ${reverse?'flex-row-reverse':''} text-emerald-900 max-w-xs`}>
            <Image width={100} height={100} src={imgsrc} alt="" className="w-24" />
            <h1 className="text-2xl md:text-3xl font-bold uppercase">{Pname}</h1>
        </div>
        <div className="text-emerald-900 space-y-2 text-sm md:text-lg">
            <p>{Pdate}</p>
            <p>{Plocation}</p>
            <p>Adresse : <span>{Padresse}</span></p>
        </div>
    </div>
  )
}

export default ProgrameCard