import data from './MyListData.json';
import MyListCard from './MyListCard';

export default function MyList() {
    const tags = data.map(item=> 
        <MyListCard key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content} />
    );
    return (
    <div className='
    grid grid-cols-1 md:grid-cols-2 gap-4
    '>
        {tags}
            {/*<MyListCard title={data[0].title} imgUrl={data[0].imgUrl} content={data[0].content} />
            <MyListCard title={data[1].title} imgUrl={data[1].imgUrl} content={data[1].content} />
            <MyListCard title={data[2].title} imgUrl={data[2].imgUrl} content={data[2].content} />
            <MyListCard title={data[3].title} imgUrl={data[3].imgUrl} content={data[3].content} />*/}
    </div>
  )
}
