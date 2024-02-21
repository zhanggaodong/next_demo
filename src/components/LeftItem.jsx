import Link from 'next/link' 
import  "./style.model.css"

const ChildItems = ({ items, params }) => {
  return (
    <ul>
      {items.map((sitem) => (
        <li
          key={sitem.id}
          className={params === sitem.id ? 'active mb-4' : 'mb-4'}
        >
          <Link
            className="block mb-1 text-sm transition-colors hover:text-blue-300"
            href={`/detail/${sitem.id}`}
          >
            {sitem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};


const LeftItem = async ({params,result}) => { 
  
  return(
    <div>
       {result.map((item) => (
          <div key={item.title}>
            <p className="mb-4 mt-6 font-bold">{item.title}</p>
            <ChildItems items={item.children} params={params} />
          </div>
       ))}
     </div>
    )
}

export default LeftItem