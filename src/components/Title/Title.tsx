import { PropsWithChildren } from "react";
import './Title.scss';

/**
 * @param children - The children to be
 * @returns A title component
 * @example
 * <Title>My Title</Title>
 */
const Title = ({ children }: PropsWithChildren) => {
    return <h1 className="title">{children}</h1>;
};

export default Title;