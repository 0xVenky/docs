import { Markdown, Typography } from "@carrot-kpi/ui";
import { NextraThemeLayoutProps } from "nextra";
import { Footer } from "./footer";
import Navbar from "./navbar";
import { Navigation } from "./navigation";
import PageMap from "./page-map";
import Sidebar from "./sidebar";

const Theme = ({ children, pageOpts }: NextraThemeLayoutProps) => {
    return (
        <div className="flex h-full flex-col">
            <Navbar />
            <div className="flex dark:bg-grid-dark dark:bg-black flex-1">
                <Sidebar map={pageOpts.pageMap} />
                <div className="w-full bg-grid-light flex justify-center py-12">
                    <div className="max-w-4xl">
                        <Typography variant="h1">{pageOpts.title}</Typography>
                        {pageOpts.frontMatter?.subtitle && (
                            <Typography
                                variant="h5"
                                className={{ root: "mt-3 mb-8 text-gray-500" }}
                                weight="medium"
                            >
                                {pageOpts.frontMatter?.subtitle}
                            </Typography>
                        )}
                        <Markdown className={{ root: "mb-20" }}>
                            {children}
                        </Markdown>
                        <Navigation map={pageOpts.pageMap} />
                    </div>
                </div>
                <PageMap
                    headings={pageOpts.headings}
                    pageFilePath={pageOpts.filePath}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Theme;
