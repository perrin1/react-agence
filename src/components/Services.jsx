import React, { useState, useEffect } from "react";

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const services = [
    {
      id: 1,
      title: "Apparels Industry",
      context:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: `<svg class="w-16 h-16 fill-gray-400 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="furniture">
            <path d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z"></path>
          </svg>`,
    },
    {
      id: 2,
      title: "Architectural & Furniture",
      context:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: `  <svg
            class="w-16 h-16 fill-gray-400 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 64 64"
            viewBox="0 0 64 64"
            id="furniture"
          >
            <path d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z"></path>
          </svg>`,
    },
    {
      id: 3,
      title: "Automotive industry",
      context:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: ` <svg
            class="w-16 h-16 fill-gray-400 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="engine"
          >
            <path d="M60,34H56a1,1,0,0,0-1,1v3H52V28a1,1,0,0,0-1-1H47.51l-4.7-6.58A1,1,0,0,0,42,20H35V17h3a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H26a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3v3H24a1,1,0,0,0-.81.42L18.49,27H13a1,1,0,0,0-1,1V38H9V35a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V44h3v5a1,1,0,0,0,1,1H24.59l2.7,2.71A1,1,0,0,0,28,53H48a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,52,49V44h3v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V35A1,1,0,0,0,60,34ZM35.77,37.64l-5,6A1,1,0,0,1,30,44a1,1,0,0,1-.64-.23,1,1,0,0,1-.13-1.41L32.87,38H29a1,1,0,0,1-.77-1.64l5-6a1,1,0,0,1,1.54,1.28L31.13,36H35a1,1,0,0,1,.77,1.64Z"></path>
          </svg>`,
    },
    {
      id: 4,
      title: "Backpacks and Umbrella",
      context:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: ` <svg
            class="w-16 h-16 fill-gray-400 group-hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 68 68"
            viewBox="0 0 68 68"
            id="backpack"
          >
            <path d="M40.81303 3.82562C38.98769 2.00029 36.56427 1 33.9964 1c-5.32124 0-9.64219 4.32095-9.64219 9.64219v1.155c.86253-.45394 1.85434-.8583 2.06251-.91783v-.23717c0-4.17656 3.40312-7.57968 7.57968-7.57968 2.02128 0 3.91881.79402 5.35221 2.22748 2.39902 2.38175 2.19713 5.48257 2.21722 5.58937-1.72462-.65657.48384.15585 1.47468.62911.19594.09278.39188.18562.58782.28872v-1.155C43.62833 8.06406 42.62798 5.64064 40.81303 3.82562zM5.42237 17.56526c.06061.0124.12664.02386.18543.03651.28198.06049.54011.1233.78118.18713.06917.01832.13073.03638.19663.05482.17668.04935.34235.09851.49618.14779.05923.01901.11827.03739.17416.05621.18883.06351.36545.12633.51808.18631.02921.00856.0574.01762.0846.02719v-.0005c2.75437.97536 4.91557 2.5021 6.36275 4.47497.20293-.49549.43072-.97845.66965-1.45555.05615-.1121.1138-.22307.17196-.3341.275-.52551.56667-1.04195.88554-1.5431.03726-.0586.07843-.11481.11632-.17309.169-.25995.33832-.51978.51915-.77275-1.35251-1.14959-3.82893-2.81631-6.825-2.81631-1.77851 0-3.53385.59015-5.23784 1.75786.05923.00944.10675.02071.1646.0304C4.94514 17.47242 5.19037 17.51773 5.42237 17.56526zM6.33284 19.91547c-.00497-.00157-.00906-.00308-.0141-.00459-.18675-.05753-.39396-.11537-.61873-.17227-.04116-.01045-.08768-.02052-.13017-.03084-.18663-.04544-.38716-.09001-.59991-.13319-.0698-.01423-.14105-.0282-.21375-.04205-.22867-.04349-.47257-.08504-.7307-.12412-.05174-.00787-.09895-.01643-.15188-.02404-.31622-.04551-.65523-.08699-1.01602-.12343-.01655-.0017-.03512-.0029-.0518-.00453-.66902 3.73099-2.54307 18.68649 8.20905 27.80336l.45249-4.8301.29898-3.21259C8.67972 36.39406 4.40799 30.6788 6.33284 19.91547zM52.04333 19.40148c.31994.50278.61262 1.02093.88856 1.54833.05671.10845.11317.21677.16806.32623.23931.47742.46735.96076.67059 1.45662 1.44114-1.96482 3.60233-3.49055 6.36275-4.47195.49819-.20595 1.27729-.45527 2.38131-.67921.30169-.06703.6186-.12884.94641-.18574-1.70619-1.16513-3.46009-1.75497-5.23614-1.75497-2.99003 0-5.46443 1.66622-6.81594 2.81631.18147.25397.35154.51481.52116.77583C51.96692 19.28963 52.00701 19.34446 52.04333 19.40148zM39.9876 24.60533c0-3.30374-2.6879-5.99164-5.99113-5.99164-1.59119 0-3.09477.62238-4.23378 1.75333-1.13095 1.14002-1.75736 2.64762-1.75736 4.23831v1.15512H39.9876V24.60533z"></path>
            <path
              d="M54.45019,42.19164L54.12,38.66471c-0.00044-0.00497,0.00088-0.00976,0.0005-0.01473L53.19247,28.681
                c-0.12488-1.07506-0.3414-2.15566-0.64352-3.18843c-0.1121-0.38861-0.25397-0.76343-0.3888-1.14153
                c-0.07264-0.20356-0.13023-0.41416-0.20935-0.61464c-0.40069-1.01457-0.89851-1.98037-1.46361-2.90764
                c-0.39156-0.64252-0.80831-1.27056-1.27673-1.86713c-1.87519-2.38679-4.31334-4.31988-7.04757-5.58931
                c-4.6356-2.17278-10.26822-2.3747-15.14149-0.51865l-0.00101-0.00101c-0.01208,0.00504-0.02518,0.01007-0.03827,0.0146
                c-2.2609,0.90637-4.11998,2.04992-5.84813,3.59629c-0.85854,0.7594-1.64771,1.59768-2.35022,2.49549
                c-0.00063,0.00076-0.00069,0.00183-0.00132,0.00258c-1.52573,1.94317-2.64863,4.13961-3.33747,6.52791
                c-0.30313,1.02571-0.51965,2.10531-0.64755,3.21411l-0.92513,9.94205c-0.0005,0.00642,0.0012,0.01259,0.00063,0.01901
                l-0.39685,4.2395l-1.72809,18.57093c-0.1571,1.41948,0.29407,2.82587,1.23368,3.87576C13.92127,66.39877,15.26573,67,16.67162,67
                h34.6497c1.40589,0,2.75034-0.60123,3.68995-1.6491c0.93961-1.04988,1.39078-2.45627,1.23569-3.85763L54.45019,42.19164z
                M23.74537,25.76046h2.19745v-1.15512c0-2.13854,0.8389-4.16177,2.36161-5.69656c1.53379-1.52221,3.55299-2.35758,5.69203-2.35758
                c4.44123,0,8.05364,3.61291,8.05364,8.05415v1.15512h2.19746c0.57001,0,1.03125,0.46175,1.03125,1.03125
                s-0.46124,1.03125-1.03125,1.03125h-3.22871H26.97407h-3.22871c-0.57001,0-1.03125-0.46175-1.03125-1.03125
                S23.17536,25.76046,23.74537,25.76046z M18.01305,30.95902c0.09265-0.56095,0.61231-0.94615,1.18634-0.84796
                c0.56195,0.09315,0.94162,0.62439,0.84796,1.18634c-0.25177,1.51566-0.47534,3.10232-0.66367,4.71667
                c-0.06143,0.52469-0.50656,0.91141-1.0232,0.91141c-0.03928,0-0.08057-0.00201-0.12085-0.00705
                c-0.56598-0.06596-0.97083-0.57806-0.90436-1.14404C17.52764,34.1278,17.75524,32.50741,18.01305,30.95902z M16.85692,40.01974
                c0.04633-0.56699,0.52872-0.99047,1.11283-0.94213c0.56699,0.04733,0.98895,0.54584,0.94162,1.11333
                c-0.13193,1.5932-0.24875,3.18792-0.35449,4.78364c-0.03625,0.54483-0.49045,0.96277-1.02823,0.96277
                c-0.02316,0-0.04633-0.0005-0.06949-0.00252c-0.568-0.03777-0.99802-0.52922-0.96076-1.09722
                C16.60616,43.23083,16.72298,41.62403,16.85692,40.01974z M50.81475,61.55873c-0.77747,0.85653-1.88929,1.34748-3.05146,1.34748
                H20.22964c-1.16217,0-2.27399-0.49095-3.05146-1.34748c-0.77143-0.84948-1.14908-1.99201-1.0383-3.13505
                c0.7966-8.61862,7.92776-15.12186,16.58766-15.12186h2.53684c8.64077,0,15.77293,6.50223,16.58867,15.12437
                C51.96383,59.56672,51.58617,60.70926,50.81475,61.55873z"
            ></path>
            <path d="M35.26438 45.36433h-2.53684c-7.58837 0-13.83631 5.69807-14.53422 13.25372-.0564.57857.12589 1.12844.51261 1.55443.39276.43304.93357.67122 1.52372.67122h27.53365c.59015 0 1.13095-.23817 1.52372-.67122.38672-.42599.569-.97586.51361-1.5494C49.08458 51.06342 42.83563 45.36433 35.26438 45.36433zM65.18973 19.2642c-.80372.08403-1.48671.18644-2.06786.29772-.53281.11361-1.02621.24031-1.45882.36954 1.91421 10.74004-2.35343 16.45807-5.43693 19.08504l.23654 2.54093.51544 5.50283C67.74394 37.93596 65.86372 23.00313 65.18973 19.2642z"></path>
          </svg>`,
    },
  ];
  return (
    <section id="service" className="md:px-14 px-4 py-10 max-w-screen-2xl mx-auto ">
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold mb-2 text-neutralDGrey">
          Nos partenaires
        </h2>
        <p className="text-neutralDGrey">
          tes test tes tes tes tes sterertetete etetete eretee{" "}
        </p>
      </div>


      <div className= {`grid items-center py-10 animate-bounce  justify-between grid-cols-2 gap-4 mb-4 space-x-3 mx-auto mt-2 md:mt-2 md:grid-cols-4 transition-transform duration-700 ease-in-out  ${scrollPosition > 0 ? "-translate-y-4" : ""}` } >
        {/* <div className="my-12 flex flex-wrap justify-between items-center  gap-8"> */}
        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
          <img
            className="object-contain  w-full h-6 mx-auto"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
            alt=""
          />
        </div>

        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
          <img
            className="object-contain w-full h-8 mx-auto"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
            alt=""
          />
        </div>

        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
          <img
            className="object-contain w-full h-8 mx-auto"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
            alt=""
          />
        </div>

        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
          <img
            className="object-contain w-full mx-auto h-7"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
            alt=""
          />
        </div>
      </div>

      <div className={`relative mt-4 mx-auto h-full px-4 md:pb-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8  transition-transform duration-700 ease-in-out  ${scrollPosition > 10 ? "-translate-y-4" : ""}`}>
        <div className="text-center my-8">
          <h2 className="text-4xl font-semibold mb-2 text-neutralDGrey">
            Nos services
          </h2>
          <p className="text-neutralDGrey">
            tes test tes tes tes tes sterertetete etetete eretee{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mt-20 md-w-11/12 mx-auto">
          {services.map(({ id, title, context, image }) => (
            <article
              key={id}
              // href="#"
              className="transition-all cursor-pointer hover:-translate-y-5 hover:border-b-4   duration-1000 bg-white hover:bg-neutralPrimary hover:shadow-xl m-2 p-4 relative z-40 group  rounded-xl "
            >
              <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
              <div className="py-2 px-9 relative  ">
                {image && <div dangerouslySetInnerHTML={{ __html: image }} />}

                <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                  {title}
                </h3>
                <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                  {context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

