
import UserInput from "../common/Components/userInput";
import Axios from "../axios";
import { useState } from 'react'; 
import { useSearchParams } from 'react-router-dom';
import { InputField } from "../common/Components/InputField.tsx";
import { createSearchParams, useNavigate } from "react-router-dom";
import DisplayResults from "../common/Components/DisplayResults.tsx";


const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query"));
    const navigate = useNavigate();

    const navigateWithQuery = (query) => {
        navigate({
            pathname: "/search-results",
            search: createSearchParams({
                query: query
            }).toString()
        })
    }
    const mockData = [
        {
            "id": "https://www.marketwatch.com/story/vladimir-putin-isnt-just-losing-in-ukraine-hes-set-russias-economy-back-40-years-11668759710[2022-11-18]",
            "title": [
              "Vladimir Putin isn't just losing in Ukraine -- he's set Russia's economy back 40 years"
            ],
            "source": "https://www.marketwatch.com/story/vladimir-putin-isnt-just-losing-in-ukraine-hes-set-russias-economy-back-40-years-11668759710",
            "releaseDate": "2022-11-18",
            "insertDate": "20221118",
            "sourceName": "Market Watch",
            "content": [
              "To win a war you need will and means. I am cautiously optimistic that Ukraine has both in its fight against Russia.  Ukrainian will increases with every mass grave of murdered civilians uncovered and with every liberated Ukrainian village. For Ukrainians this war is no longer about territory but about survival as a nation \'97 its invader believes Ukraine doesn\'92t have the right to exist (I wrote about that here).  The means of the Ukrainian army has increased substantially over the past few months. In addition to receiving more modern equipment from NATO, the Ukrainians enjoyed a larger weapon transfer from the Russian side to the Ukrainian than NATO had provided when they pushed Russian army out of Kharkiv Oblast. Ukrainians know how to use this equipment and can start using it immediately.  Russian President Vladimir Putin\'92s potential strategies are weak:  First, win the war by force \'96 this one is not working out so well.  Second, scare the West economically. So far this has not worked. Europe filled up its gas reserves and through economizing is confident that it can get through the winter.  The last card Putin has left is the threat of nuclear war. From what I\'92ve read, tactical nuclear weapons will accomplish little from a military perspective, but they do have a significant psychological impact. The West has drawn a red line, telling Putin that if he uses nuclear weapons, the Russian army will face conventional forces. The Russian army is not a match for NATO\'92s. The mobilization  The troop mobilization Putin has enacted may destabilize his regime. As I was growing up in Russia, my parents were terrified of my brothers and I turning 17 and being drafted into the Russian army. The Afghan war was over; my and other parents of boys did not fear for our lives but for our sanity. Being drafted into the Russian army then was like serving a three-year prison sentence. Older soldiers constantly abused younger ones.  I can only imagine the agony Russian parents go through, fearing that their sons will be drafted and, without proper training or equipment, sent to the front line within two weeks to become cannon fodder for Ukrainian artillery.  With every grieving parent, the Russian political system becomes a little bit less stable. Large-scale protests in Russia could happen tomorrow or years from now, but the chances of it happening are exponentially higher with parents living in fear for their sons\'92 future.  I have many reasons to be thankful to my father for immigrating to the U.S. 31 years ago, and today I have a new one: I don\'92t have to worry about my 21-year-old son, Jonah (who was born in the U.S.) being drafted to die in this senseless war.  \'93 Due to sanctions and the voluntary withdrawal from Russia of Western firms, Russia will eventually be frozen in time, like Cuba. \'94  The Russian economy  This war has set the Russian economy back 40 years. On the surface Russia today looks very different from the Russia of the 1980s that I remember. This Russia has beautiful, modern supermarkets which still, to my surprise, are full of food.  Yet due to sanctions and the voluntary withdrawal from Russia of Western firms, Russia will eventually be frozen in time. I\'92m thinking of Cuba when I say this. Cuba looks today the same way it did in 1959 when Castro came to power and the West imposed a trade embargo.  Yes, Russians will miss McDonald\'92s and Coca Cola, but that is not such a great loss. More painful is the loss of advanced technology \'97 semiconductors, software, complex manufacturing. Russia has little of this. Today you cannot build a car or washing machine without semiconductors. This is why Russian auto production is down by half since the war started and washing machine production has dropped from 600,000 units a month to 100,000.  A wild card here is China. China has some technologies that Russia needs, such as oil drilling equipment and spare parts for planes. Will China risk sanctions from the U.S. and Europe by exporting such things to Russia? I don\'92t know. After Visa and Mastercard cut off Russia from their networks, basically preventing Russians from using rubles outside of Russia, China stopped onboarding Russians to their own credit card network.  Sanctions have crippled Russia\'92s ability to produce enough weapons to fight its war. Moreover, Russia needs every weapon it can get to replace what it has lost. Russia has already resorted to using tanks from the 1970s. Finally, this war has been a sad infomercial for Russian weapons. India used to import half of its weapons from Russia. Now, the U.S. and Europe will likely become the sole providers of weapons to India \'96 another tailwind for defense contractors. After the war is over, Russia will be selling its weapons to rogue regimes such as Iran and North Korea, but the market for its weapons has shrunk considerably since February.  Until the war the Russian economy was doing fairly well. Russians shouldn\'92t thank their leaders for this but give a warm hug to their neighbor to the East. China\'92s insane growth (by any modern standard) drove demand for all commodities (China is a commodity-poor nation). Prices of most commodities have gone up a lot, and Russia benefited. Putin jumped right aboard and took credit for the economic rebirth of Russia.  Yet other than mastering the production of commodities and food with the help of Western technologies, Russia has achieved little on its own. Russia even imported from Germany the steel used to manufacture its tanks.  A crucial consequence of the war is that Western oil companies have left Russia. In addition to providing capital, they brought technology and knowhow. Both are now gone. Russia is the world\'92s third-largest producer of oil, behind the U.S. and Saudi Arabia, producing 11 million barrels a day. The recession that we are going to find ourselves in will reduce demand for petrochemicals, though not by much. (Historically, recessions have reduced the rate of growth of demand for petrochemicals but did not lead to declines.) The supply oil and natural gas from Russia will not be growing and likely will be shrinking. Europe will have a challenging winter, but it appears that the Russian economy will be challenged just to survive.  Vitaliy Katsenelson is CEO of investment firm IMA. His recent book, Soul in the Game \'96 The Art of a Meaningful Life, deals with the most important investment you\'92ll ever make \'97 investment in yourself. For more of Katsenelson\'92s writing on investing, life, music and other topics, check out ContrarianEdge.com or listen at Investor.FM.  More: Why the EU ban and G7 price cap on Russian oil won\'92t guarantee a lasting rally for oil  Also read: What Russia\'92s retreat from strategic southern Ukraine city Kherson tells us about the state of the war"
            ],
        },
        {
            "id": "https://www.marketwatch.com/story/vladimir-putin-isnt-just-losing-in-ukraine-hes-set-russias-economy-back-40-years-11668759710?mod=home-page[2022-11-18]",
            "title": [
              "Vladimir Putin isn't just losing in Ukraine -- he's set Russia's economy back 40 years"
            ],
            "source": "https://www.marketwatch.com/story/vladimir-putin-isnt-just-losing-in-ukraine-hes-set-russias-economy-back-40-years-11668759710?mod=home-page",
            "releaseDate": "2022-11-18",
            "insertDate": "20221118",
            "sourceName": "Market Watch",
            "content": [
              "To win a war you need will and means. I am cautiously optimistic that Ukraine has both in its fight against Russia.  Ukrainian will increases with every mass grave of murdered civilians uncovered and with every liberated Ukrainian village. For Ukrainians this war is no longer about territory but about survival as a nation \'97 its invader believes Ukraine doesn\'92t have the right to exist (I wrote about that here).  The means of the Ukrainian army has increased substantially over the past few months. In addition to receiving more modern equipment from NATO, the Ukrainians enjoyed a larger weapon transfer from the Russian side to the Ukrainian than NATO had provided when they pushed Russian army out of Kharkiv Oblast. Ukrainians know how to use this equipment and can start using it immediately.  Russian President Vladimir Putin\'92s potential strategies are weak:  First, win the war by force \'96 this one is not working out so well.  Second, scare the West economically. So far this has not worked. Europe filled up its gas reserves and through economizing is confident that it can get through the winter.  The last card Putin has left is the threat of nuclear war. From what I\'92ve read, tactical nuclear weapons will accomplish little from a military perspective, but they do have a significant psychological impact. The West has drawn a red line, telling Putin that if he uses nuclear weapons, the Russian army will face conventional forces. The Russian army is not a match for NATO\'92s. The mobilization  The troop mobilization Putin has enacted may destabilize his regime. As I was growing up in Russia, my parents were terrified of my brothers and I turning 17 and being drafted into the Russian army. The Afghan war was over; my and other parents of boys did not fear for our lives but for our sanity. Being drafted into the Russian army then was like serving a three-year prison sentence. Older soldiers constantly abused younger ones.  I can only imagine the agony Russian parents go through, fearing that their sons will be drafted and, without proper training or equipment, sent to the front line within two weeks to become cannon fodder for Ukrainian artillery.  With every grieving parent, the Russian political system becomes a little bit less stable. Large-scale protests in Russia could happen tomorrow or years from now, but the chances of it happening are exponentially higher with parents living in fear for their sons\'92 future.  I have many reasons to be thankful to my father for immigrating to the U.S. 31 years ago, and today I have a new one: I don\'92t have to worry about my 21-year-old son, Jonah (who was born in the U.S.) being drafted to die in this senseless war.  \'93 Due to sanctions and the voluntary withdrawal from Russia of Western firms, Russia will eventually be frozen in time, like Cuba. \'94  The Russian economy  This war has set the Russian economy back 40 years. On the surface Russia today looks very different from the Russia of the 1980s that I remember. This Russia has beautiful, modern supermarkets which still, to my surprise, are full of food.  Yet due to sanctions and the voluntary withdrawal from Russia of Western firms, Russia will eventually be frozen in time. I\'92m thinking of Cuba when I say this. Cuba looks today the same way it did in 1959 when Castro came to power and the West imposed a trade embargo.  Yes, Russians will miss McDonald\'92s and Coca Cola, but that is not such a great loss. More painful is the loss of advanced technology \'97 semiconductors, software, complex manufacturing. Russia has little of this. Today you cannot build a car or washing machine without semiconductors. This is why Russian auto production is down by half since the war started and washing machine production has dropped from 600,000 units a month to 100,000.  A wild card here is China. China has some technologies that Russia needs, such as oil drilling equipment and spare parts for planes. Will China risk sanctions from the U.S. and Europe by exporting such things to Russia? I don\'92t know. After Visa and Mastercard cut off Russia from their networks, basically preventing Russians from using rubles outside of Russia, China stopped onboarding Russians to their own credit card network.  Sanctions have crippled Russia\'92s ability to produce enough weapons to fight its war. Moreover, Russia needs every weapon it can get to replace what it has lost. Russia has already resorted to using tanks from the 1970s. Finally, this war has been a sad infomercial for Russian weapons. India used to import half of its weapons from Russia. Now, the U.S. and Europe will likely become the sole providers of weapons to India \'96 another tailwind for defense contractors. After the war is over, Russia will be selling its weapons to rogue regimes such as Iran and North Korea, but the market for its weapons has shrunk considerably since February.  Until the war the Russian economy was doing fairly well. Russians shouldn\'92t thank their leaders for this but give a warm hug to their neighbor to the East. China\'92s insane growth (by any modern standard) drove demand for all commodities (China is a commodity-poor nation). Prices of most commodities have gone up a lot, and Russia benefited. Putin jumped right aboard and took credit for the economic rebirth of Russia.  Yet other than mastering the production of commodities and food with the help of Western technologies, Russia has achieved little on its own. Russia even imported from Germany the steel used to manufacture its tanks.  A crucial consequence of the war is that Western oil companies have left Russia. In addition to providing capital, they brought technology and knowhow. Both are now gone. Russia is the world\'92s third-largest producer of oil, behind the U.S. and Saudi Arabia, producing 11 million barrels a day. The recession that we are going to find ourselves in will reduce demand for petrochemicals, though not by much. (Historically, recessions have reduced the rate of growth of demand for petrochemicals but did not lead to declines.) The supply oil and natural gas from Russia will not be growing and likely will be shrinking. Europe will have a challenging winter, but it appears that the Russian economy will be challenged just to survive.  Vitaliy Katsenelson is CEO of investment firm IMA. His recent book, Soul in the Game \'96 The Art of a Meaningful Life, deals with the most important investment you\'92ll ever make \'97 investment in yourself. For more of Katsenelson\'92s writing on investing, life, music and other topics, check out ContrarianEdge.com or listen at Investor.FM.  More: Why the EU ban and G7 price cap on Russian oil won\'92t guarantee a lasting rally for oil  Also read: What Russia\'92s retreat from strategic southern Ukraine city Kherson tells us about the state of the war"
            ],
        },
        {
            "id": "https://www.marketwatch.com/story/vladimir-putin-isnt-just-losing-in-ukraine-hes-set-russias-economy-back-40-years-11668759710?mod=home-page[2022-11-18]",
            "title": [
              "Vladimir Putin isn't just losing in Ukraine -- he's set Russia's economy back 40 years"
            ],
            "source": "https://www.marketwatch.com/story/vladimir-putin-isnt-just-losing-in-ukraine-hes-set-russias-economy-back-40-years-11668759710?mod=home-page",
            "releaseDate": "2022-11-18",
            "insertDate": "20221118",
            "sourceName": "Market Watch",
            "content": [
              "To win a war you need will and means. I am cautiously optimistic that Ukraine has both in its fight against Russia.  Ukrainian will increases with every mass grave of murdered civilians uncovered and with every liberated Ukrainian village. For Ukrainians this war is no longer about territory but about survival as a nation \'97 its invader believes Ukraine doesn\'92t have the right to exist (I wrote about that here).  The means of the Ukrainian army has increased substantially over the past few months. In addition to receiving more modern equipment from NATO, the Ukrainians enjoyed a larger weapon transfer from the Russian side to the Ukrainian than NATO had provided when they pushed Russian army out of Kharkiv Oblast. Ukrainians know how to use this equipment and can start using it immediately.  Russian President Vladimir Putin\'92s potential strategies are weak:  First, win the war by force \'96 this one is not working out so well.  Second, scare the West economically. So far this has not worked. Europe filled up its gas reserves and through economizing is confident that it can get through the winter.  The last card Putin has left is the threat of nuclear war. From what I\'92ve read, tactical nuclear weapons will accomplish little from a military perspective, but they do have a significant psychological impact. The West has drawn a red line, telling Putin that if he uses nuclear weapons, the Russian army will face conventional forces. The Russian army is not a match for NATO\'92s. The mobilization  The troop mobilization Putin has enacted may destabilize his regime. As I was growing up in Russia, my parents were terrified of my brothers and I turning 17 and being drafted into the Russian army. The Afghan war was over; my and other parents of boys did not fear for our lives but for our sanity. Being drafted into the Russian army then was like serving a three-year prison sentence. Older soldiers constantly abused younger ones.  I can only imagine the agony Russian parents go through, fearing that their sons will be drafted and, without proper training or equipment, sent to the front line within two weeks to become cannon fodder for Ukrainian artillery.  With every grieving parent, the Russian political system becomes a little bit less stable. Large-scale protests in Russia could happen tomorrow or years from now, but the chances of it happening are exponentially higher with parents living in fear for their sons\'92 future.  I have many reasons to be thankful to my father for immigrating to the U.S. 31 years ago, and today I have a new one: I don\'92t have to worry about my 21-year-old son, Jonah (who was born in the U.S.) being drafted to die in this senseless war.  \'93 Due to sanctions and the voluntary withdrawal from Russia of Western firms, Russia will eventually be frozen in time, like Cuba. \'94  The Russian economy  This war has set the Russian economy back 40 years. On the surface Russia today looks very different from the Russia of the 1980s that I remember. This Russia has beautiful, modern supermarkets which still, to my surprise, are full of food.  Yet due to sanctions and the voluntary withdrawal from Russia of Western firms, Russia will eventually be frozen in time. I\'92m thinking of Cuba when I say this. Cuba looks today the same way it did in 1959 when Castro came to power and the West imposed a trade embargo.  Yes, Russians will miss McDonald\'92s and Coca Cola, but that is not such a great loss. More painful is the loss of advanced technology \'97 semiconductors, software, complex manufacturing. Russia has little of this. Today you cannot build a car or washing machine without semiconductors. This is why Russian auto production is down by half since the war started and washing machine production has dropped from 600,000 units a month to 100,000.  A wild card here is China. China has some technologies that Russia needs, such as oil drilling equipment and spare parts for planes. Will China risk sanctions from the U.S. and Europe by exporting such things to Russia? I don\'92t know. After Visa and Mastercard cut off Russia from their networks, basically preventing Russians from using rubles outside of Russia, China stopped onboarding Russians to their own credit card network.  Sanctions have crippled Russia\'92s ability to produce enough weapons to fight its war. Moreover, Russia needs every weapon it can get to replace what it has lost. Russia has already resorted to using tanks from the 1970s. Finally, this war has been a sad infomercial for Russian weapons. India used to import half of its weapons from Russia. Now, the U.S. and Europe will likely become the sole providers of weapons to India \'96 another tailwind for defense contractors. After the war is over, Russia will be selling its weapons to rogue regimes such as Iran and North Korea, but the market for its weapons has shrunk considerably since February.  Until the war the Russian economy was doing fairly well. Russians shouldn\'92t thank their leaders for this but give a warm hug to their neighbor to the East. China\'92s insane growth (by any modern standard) drove demand for all commodities (China is a commodity-poor nation). Prices of most commodities have gone up a lot, and Russia benefited. Putin jumped right aboard and took credit for the economic rebirth of Russia.  Yet other than mastering the production of commodities and food with the help of Western technologies, Russia has achieved little on its own. Russia even imported from Germany the steel used to manufacture its tanks.  A crucial consequence of the war is that Western oil companies have left Russia. In addition to providing capital, they brought technology and knowhow. Both are now gone. Russia is the world\'92s third-largest producer of oil, behind the U.S. and Saudi Arabia, producing 11 million barrels a day. The recession that we are going to find ourselves in will reduce demand for petrochemicals, though not by much. (Historically, recessions have reduced the rate of growth of demand for petrochemicals but did not lead to declines.) The supply oil and natural gas from Russia will not be growing and likely will be shrinking. Europe will have a challenging winter, but it appears that the Russian economy will be challenged just to survive.  Vitaliy Katsenelson is CEO of investment firm IMA. His recent book, Soul in the Game \'96 The Art of a Meaningful Life, deals with the most important investment you\'92ll ever make \'97 investment in yourself. For more of Katsenelson\'92s writing on investing, life, music and other topics, check out ContrarianEdge.com or listen at Investor.FM.  More: Why the EU ban and G7 price cap on Russian oil won\'92t guarantee a lasting rally for oil  Also read: What Russia\'92s retreat from strategic southern Ukraine city Kherson tells us about the state of the war"
            ],
        },
    ]
    return (
        // <div className='text-center'>
        //     <h3>What would you like to search?</h3>
        //     {/* <UserInput query={query} setQuery={setQuery} /> */}
        //     <Axios query={query} />
        // </div>
        <>
            <div className="px-32 py-[52px] z-10 relative overflow-auto h-full font-source-sans-pro">
                <div className="flex flex-col gap-4">
                    <div className="mx-auto">
                        <InputField customStyles={["py-4", "w-[600px]", "text-2xl"]} query={query} inputCallback={(query) => setQuery(query)} onKeyDownCallback={() => {
                            navigateWithQuery(query);
                        }}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                {
                    mockData.map((record) => {
                        return (
                            <div>
                                <DisplayResults 
                                    id={record.id}
                                    title={record.title}
                                    source={record.source}
                                    sourceName={record.sourceName}
                                    releaseDate={record.releaseDate}
                                    content={record.content}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default SearchResults;