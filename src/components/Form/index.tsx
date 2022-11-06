import React, { useRef, useState } from "react";
import { useIntl } from "react-intl";
import { usePost } from "../../context/posts";
import { Post } from "../../models/Post";
import NonImageSVG from "../../assets/image.png";
import { ReactComponent as Trash } from "../../assets/trash.svg";

import {
  DiscardButton,
  Footer,
  FormStyled,
  Image,
  ImageInput,
  InputMesage,
  InputName,
  PublishButton,
  DeleteImageButton,
  Portrait,
} from "./styles";

const Form: React.FC = () => {
  const { formatMessage } = useIntl();
  const [post, setPost] = useState<Post>({ id: "", author: "", message: "" });
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendPost } = usePost();

  const handleImageChange = (e: any) => {
    console.log(e.target.files?.length === 1);
    if (e.target.files?.length === 1) {
      setPost((op) => {
        return {
          ...op,
          imgURL: URL.createObjectURL(e.target.files[0]),
        };
      });
    }
  };

  const removeImage = () => {
    setPost((op) => {
      return {
        ...op,
        imgURL: undefined,
      };
    });
  };

  const handleSubmmit = (e: any) => {
    e.preventDefault();
    sendPost(post);
    discardPost();
  };

  const discardPost = () => {
    setPost({ id: "", author: "", message: "" });
  };

  return (
    <FormStyled onSubmit={handleSubmmit}>
      <Portrait>
        <ImageInput
          ref={inputRef}
          type={"file"}
          accept="image/*"
          onChange={handleImageChange}
        />
        <Image
          alt="Imagem da mensagem"
          aria-label="Imagem da mensagem"
          src={post?.imgURL ?? NonImageSVG}
          onClick={() => inputRef.current?.click()}
        />
        {post?.imgURL ? (
          <DeleteImageButton onClick={removeImage} aria-label="Remover imagem">
            <Trash />
          </DeleteImageButton>
        ) : null}
      </Portrait>
      <InputName
        required
        aria-label="Inserir nome"
        placeholder={formatMessage({ id: "writeYourName" })}
        value={post.author}
        onChange={(e) =>
          setPost((op) => {
            return { ...op, author: e.target.value };
          })
        }
      />
      <InputMesage
        aria-label="Inserir mensagem"
        required
        placeholder={formatMessage({ id: "message" })}
        rows={3}
        value={post.message}
        onChange={(e) =>
          setPost((op) => {
            return { ...op, message: e.target.value };
          })
        }
      />
      <Footer>
        <DiscardButton 
          type="reset"
          title="Descartar postagem"
          aria-label="Descartar postagem"
          onClick={discardPost}
        >
          {formatMessage({ id: "discard" })}
        </DiscardButton>
        <PublishButton 
          title="Postar mensagem"
          aria-label="Postar mensagem"
          type="submit"
        >
          {formatMessage({ id: "publish" })}
        </PublishButton>
      </Footer>
    </FormStyled>
  );
};

export default Form;
