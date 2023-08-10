import "../FAQ/Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const expandOnClick = (qId) => {
    const qClass = [".a0", ".a1", ".a2", ".a3", ".a4", ".a5", ".a6"];
    let question = qClass[qId];
    const answer = document.querySelector(question);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
};

function Faq() {
    return (
        <>
            <div className="container-pages">
                <div className="opacity-container-pages"></div>
                <h2 className="heading-pages">FAQ's</h2>
            </div>
            <div className="container1-faq">
                <h2 className="heading-faq">FAQ</h2>
                <hr className="line-faq" />
            </div>
            <div className="container2-faq">
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(0)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>How will my order be delivered to me?</span>
                    </button>
                    <p className="faq-answer a0">
                        Purus semper eget duis at tellus at urna condimentum. Eu
                        volutpat odio facilisis mauris sit amet massa. Nam
                        libero justo laoreet sit. Elit sed vulputate mi sit amet
                        mauris commodo quis imperdiet. At in tellus integer
                        feugiat scelerisque. Donec ultrices tincidunt arcu non.
                        Vel eros donec ac odio. Sit amet facilisis magna etiam
                        tempor orci eu. Et netus et malesuada fames ac turpis
                        egestas maecenas. Fringilla urna porttitor rhoncus dolor
                        purus non enim praesent. Cras tincidunt lobortis feugiat
                        vivamus at. Cras tincidunt lobortis feugiat vivamus at
                        augue eget.
                    </p>
                </div>
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(1)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>What do I need to know?</span>
                    </button>
                    <p className="faq-answer a1">
                        Eu sem integer vitae justo eget. Ac auctor augue mauris
                        augue neque gravida in fermentum. Congue eu consequat ac
                        felis donec et. Laoreet non curabitur gravida arcu ac
                        tortor dignissim. Auctor augue mauris augue neque
                        gravida in fermentum et sollicitudin. Interdum varius
                        sit amet mattis vulputate enim nulla aliquet. Gravida
                        rutrum quisque non tellus orci ac auctor augue. Volutpat
                        consequat mauris nunc congue nisi vitae suscipit tellus
                        mauris. Vitae sapien pellentesque habitant morbi
                        tristique senectus et netus et. Vivamus arcu felis
                        bibendum ut tristique et egestas quis.
                    </p>
                </div>
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(2)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>
                            How will I know if order is placed successfully?
                        </span>
                    </button>
                    <p className="faq-answer a2">
                        Risus ultricies tristique nulla aliquet enim tortor.
                        Nisi est sit amet facilisis magna etiam. Eu mi bibendum
                        neque egestas congue quisque. Eget arcu dictum varius
                        duis. Felis imperdiet proin fermentum leo vel orci
                        porta. Rhoncus urna neque viverra justo nec. Cursus
                        turpis massa tincidunt dui ut ornare lectus sit amet.
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
                        enim. Morbi enim nunc faucibus a pellentesque sit amet.
                        Pellentesque elit ullamcorper dignissim cras tincidunt
                        lobortis feugiat vivamus at. Aliquam purus sit amet
                        luctus.
                    </p>
                </div>
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(3)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>How do I check the status of my order?</span>
                    </button>
                    <p className="faq-answer a3">
                        Pulvinar pellentesque habitant morbi tristique senectus
                        et netus et. Fusce ut placerat orci nulla pellentesque.
                        Porttitor rhoncus dolor purus non enim praesent
                        elementum facilisis. Facilisis mauris sit amet massa
                        vitae tortor condimentum lacinia. Facilisis magna etiam
                        tempor orci eu lobortis elementum nibh tellus. Faucibus
                        nisl tincidunt eget nullam non. Urna molestie at
                        elementum eu facilisis sed odio. Viverra nam libero
                        justo laoreet. Proin sagittis nisl rhoncus mattis.
                    </p>
                </div>
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(4)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>Can I cancel my order?</span>
                    </button>
                    <p className="faq-answer a4">
                        Pharetra convallis posuere morbi leo urna molestie.
                        Tellus cras adipiscing enim eu turpis egestas pretium
                        aenean. Morbi leo urna molestie at. Faucibus nisl
                        tincidunt eget nullam non nisi est sit amet. Enim ut sem
                        viverra aliquet eget sit amet. Mauris cursus mattis
                        molestie a iaculis at erat pellentesque adipiscing. Sit
                        amet tellus cras adipiscing enim. Auctor urna nunc id
                        cursus metus aliquam eleifend mi in. Nunc faucibus a
                        pellentesque sit. Consequat ac felis donec et odio
                        pellentesque.
                    </p>
                </div>
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(5)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>Do you allow exchanges?</span>
                    </button>
                    <p className="faq-answer a5">
                        Scelerisque purus semper eget duis at tellus at urna.
                        Est lorem ipsum dolor sit amet consectetur adipiscing
                        elit pellentesque. Adipiscing diam donec adipiscing
                        tristique risus nec. Commodo ullamcorper a lacus
                        vestibulum sed arcu. Quis lectus nulla at volutpat diam.
                        Enim diam vulputate ut pharetra sit amet. Elementum
                        facilisis leo vel fringilla est. Vel facilisis volutpat
                        est velit egestas. Luctus venenatis lectus magna
                        fringilla urna porttitor rhoncus dolor. Elit at
                        imperdiet dui accumsan sit amet nulla facilisi morbi.
                        Mauris pellentesque pulvinar pellentesque habitant morbi
                        tristique senectus et netus.
                    </p>
                </div>
                <div>
                    <button
                        className="faq-questions"
                        onClick={() => expandOnClick(6)}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ marginRight: "1%" }}
                        />
                        <span>What are the shipping charges?</span>
                    </button>
                    <p className="faq-answer a6">
                        Scelerisque purus semper eget duis at tellus at urna.
                        Est lorem ipsum dolor sit amet consectetur adipiscing
                        elit pellentesque. Adipiscing diam donec adipiscing
                        tristique risus nec. Commodo ullamcorper a lacus
                        vestibulum sed arcu. Quis lectus nulla at volutpat diam.
                        Enim diam vulputate ut pharetra sit amet. Elementum
                        facilisis leo vel fringilla est. Vel facilisis volutpat
                        est velit egestas. Luctus venenatis lectus magna
                        fringilla urna porttitor rhoncus dolor. Elit at
                        imperdiet dui accumsan sit amet nulla facilisi morbi.
                        Mauris pellentesque pulvinar pellentesque habitant morbi
                        tristique senectus et netus.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Faq;
