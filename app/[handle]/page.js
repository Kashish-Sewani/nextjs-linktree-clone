import Image from "next/image"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({handle})
    if(!item){
        return notFound()
    }

    const item2 = {
        "_id": {
            "$oid": "672ebb9c195df7fa5f7ffbc0"
        },
        "links": [
            {
                "link": "https://www.instagram.com/kashish",
                "linktext": "Instagram"
            },
            {
                "link": "https://x.com/home",
                "linktext": "X"
            },
            {
                "link": "https://www.youtube.com/kashish",
                "linktext": "Youtube"
            }
        ],
        "handle": "kashish",
        "pic": "https://avatars.githubusercontent.com/u/114796593?v=4",
        "desc": "Made to Travel. For help, please follow one of our customer support links below."
    }
    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        <div className="photo flex justify-center flex-col items-center gap-3">
            <Image className="rounded-full" src={item.pic} alt="Profile picture" width={100} height={100} priority/>
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc text-center w-80">{item.desc}</span>
            <div className="links">
                {item.links.map((item,index)=>{
                    return <Link key={index} href={item.link}><div className="py-4 shadow-lg px-2 bg-purple-100 rounded-md my-3 min-w-96 flex justify-center" >
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>
    </div>
}