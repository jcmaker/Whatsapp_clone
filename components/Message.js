import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import moment from "moment";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  const TypeOfMessageTime =
    user === userLoggedIn.email ? SenderTime : ReceiverTime;

  return (
    <Container>
      <TypeOfMessage>{message.message}</TypeOfMessage>
      <TypeOfMessageTime>
        {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
      </TypeOfMessageTime>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

const SenderTime = styled.div`
  text-align: right;
  color: gray;
  font-size: 12px;
`;
const ReceiverTime = styled.div`
  text-align: left;
  color: gray;
  font-size: 12px;
`;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;
