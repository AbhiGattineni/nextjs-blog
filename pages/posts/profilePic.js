import Image from 'next/image'

export default function YourComponent(){
    return (
    <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Abhishek Gattineni"
    ></Image>
    )
}