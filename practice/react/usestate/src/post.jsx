export default function PostComponent({name,subtitle,image,description,time}){
   return <div className="w-200 bg-slate-300 border-r-sky-10 border-2 p-20">
   <div className="flex ">
    <img src={image} className="w-10 h-10 border rounded-md" />
    <div className="fontsize-10 ml-10">
        <b>
            {name}
        </b>
        <div>{subtitle}</div>
        {/* {(time !==undefined)? <div className="flex">
             <div>{time}</div>
             <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} className="w-10 h-10" />
             </div> :null
            } */}
              {time && (
            <div className="flex items-center">
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                alt="clock"
                className="w-4 h-4 mr-2"
              />
              <div>{time}</div>
            </div>
          )}
    </div>

   </div>
    <div className="fontSize:12 ">
        {description}
    </div>
    </div>
}

